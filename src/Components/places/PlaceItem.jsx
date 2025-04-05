import React, { useState } from 'react'
import classes from './PlaceItem.module.css'
import Card from '../shared/UI/Card'
import { Link } from 'react-router-dom'
import Modal from '../shared/UI/Modal'
const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () =>{
    setShowMap(true);
  }

  const closeMapHandler = () =>{
    setShowMap(false);
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
          <h2>The Map!</h2>
        </div>
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
          <Link className={classes['place-item__actions-button']} to={`/places/${props.id}`}>
            EDIT
          </Link>
          <button className={classes['place-item__actions-button']}>
            DELETE
          </button>
        </div>
        </Card>
      </li>
    </>
  )
}

export default PlaceItem
