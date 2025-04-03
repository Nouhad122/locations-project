import React from 'react'
import UserItem from './UserItem'
import classes from './UserList.module.css'
const UsrList = (props) => {

    if(props.items.length === 0){
        return (
            <div className={classes['center']}>
                <h2>No Users Found</h2>
            </div>
        )
    }

  return (
    <ul className={classes['user-list']}>
        {
            props.items.map(item =>(
                <UserItem 
                 key={item.id} 
                 id={item.id} 
                 name={item.name} 
                 image={item.image} 
                 placeCount={item.placeCount} 
                />
            )) 
        }
        
    </ul>
  )
}

export default UsrList
