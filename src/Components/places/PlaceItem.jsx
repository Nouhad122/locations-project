import React from 'react'
import classes from './PlaceItem.module.css'
import Card from '../shared/UI/Card'
import { Link } from 'react-router-dom'
const PlaceItem = (props) => {
  return (
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
        <button className={classes['place-item__actions-button']}>VIEW ON MAP</button>
        <Link className={classes['place-item__actions-button']} to={`/places/${props.id}`}>EDIT</Link>
        <button className={classes['place-item__actions-button']}>DELETE</button>
      </div>
      </Card>
    </li>
  )
}

export default PlaceItem
