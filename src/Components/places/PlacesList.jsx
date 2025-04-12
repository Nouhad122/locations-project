import React from 'react'
import PlaceItem from './PlaceItem'
import Card from '../shared/UI/Card'
import classes from './PlacesList.module.css'
const PlacesList = (props) => {
    if(props.items.length === 0){
        return (
            <div className={`${classes['place-list']} center`}>
                <Card className={classes['place-list__content']}>
                    <h2>No places found.</h2>
                    <button className={classes['btn-primary']}>Share Place</button>
                </Card>
            </div>
        )
    }
  return (
    <ul className={classes['place-list']}>
        {
            props.items.map(item =>(
                <PlaceItem
                 key={item.id} 
                 id={item.id} 
                 image={item.imageUrl} 
                 title={item.title} 
                 description={item.description} 
                 address={item.address} 
                 creatorId={item.creator}
                 coordinates={item.location}
                />
            ))
        }
    </ul>
  )
}

export default PlacesList
