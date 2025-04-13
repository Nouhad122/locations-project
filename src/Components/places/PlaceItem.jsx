import React, { useState } from 'react'
import classes from './PlaceItem.module.css'
import Card from '../shared/UI/Card'
import { Link } from 'react-router-dom'
import Modal from '../shared/UI/Modal'
import Map from '../shared/UI/Map'
import { useContext } from 'react'
import AuthContext from '../../Contexts/AuthContext'

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  const openMapHandler = () =>{
    setShowMap(true);
  }

  const closeMapHandler = () =>{
    setShowMap(false);
  }

  const showDeleteWarningHandler = () =>{
    setShowConfirmModal(true);
  }

  const cancelDeleteHandler = () =>{
    setShowConfirmModal(false);
  }

  const confirmDeleteHandler = () =>{
    setShowConfirmModal(false);
    console.log('Deleting...');
  }
  return (
    <>
      <Modal 
       show={showMap} 
       onCancel={closeMapHandler}
       header={props.address}
       contentClass={classes['place-item__modal-content']}
       footerClass={classes['place-item__modal-actions']}
       footer={<button className={classes['place-item__actions-button']} onClick={closeMapHandler}>Close</button>}
      >
        <div className={classes['map-container']}>
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal 
       show={showConfirmModal} 
       onCancel={cancelDeleteHandler} 
       header="Are you sure you want to delete this place?" 
       footer={
       <>
        <button className={classes['place-item__actions-button']} onClick={confirmDeleteHandler}>DELETE</button>
        <button className={classes['place-item__actions-button']} onClick={cancelDeleteHandler}>CANCEL</button>
       </>
       }
      >
        <p>Do you want to proceed and delete this place? Please note that it can't be undone thereafter.</p>
      </Modal>

      <li className={classes['place-item']}>
        <Card className={classes['place-item__content']}>
        <div className={classes['place-item__image']}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={classes['place-item__info']}>
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes['place-item__actions']}>
          <button className={classes['place-item__actions-button']} onClick={openMapHandler}>
            VIEW ON MAP
          </button>

          {isLoggedIn && (
            <Link className={classes['place-item__actions-button']} to={`/places/${props.id}`}>
              EDIT
            </Link>
          )}
          
          {isLoggedIn && (
            <button className={classes['place-item__actions-button']} onClick={showDeleteWarningHandler}>
              DELETE
            </button>
          )}
        </div>
        </Card>
      </li>
    </>
  )
}

export default PlaceItem
