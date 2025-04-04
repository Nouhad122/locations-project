import React from 'react'
import UserList from '../../Components/users/UserList'
import avatarImage from '../../assets/images/avatar.jpg'

const Users = () => {
  const USERS = [
    {
      id: 'u1', 
      name: 'Nouhad Elhallab', 
      image: avatarImage,
      placeCount: 3
    }
  ]
  return (
    <UserList items={USERS} />
  )
}

export default Users
