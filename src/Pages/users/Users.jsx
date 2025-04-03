import React from 'react'
import UserList from '../../Components/users/UserList'
import newYorkImage from '../../assets/images/new-york.jpg'

const Users = () => {
  const USERS = [
    {
      id: 'u1', 
      name: 'Nouhad Elhallab', 
      image: newYorkImage,
      placeCount: 3
    }
  ]
  return (
    <UserList items={USERS} />
  )
}

export default Users
