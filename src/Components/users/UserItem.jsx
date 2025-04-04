import React from 'react'
import classes from './UserItem.module.css'
import Card from '../shared/UI/Card'
import Avatar from '../shared/UI/Avatar'
import { Link } from 'react-router-dom'
const UserItem = (props) => {
  return (
    <li className={classes['user-item']}>
      <Link to={`/${props.id}/places`}>
        <div className={classes['user-item__content']}>
          <Card>
            <div className={classes['user-item__image']}>
                <Avatar image={props.image} alt={props.name}/>
            </div>

            <div className={classes['user-item__info']}>
              <h2>{props.name}</h2>
              <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
            </div>
          </Card>
        </div>
      </Link>
      
    </li>
  )
}

export default UserItem
