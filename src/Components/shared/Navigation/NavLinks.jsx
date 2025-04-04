import React from 'react'
import classes from './NavLinks.module.css'
import { NavLink } from 'react-router-dom'
const NavLinks = () => {
  return (
    <ul className={classes['nav-links']}>
      <li>
        <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/'>All Users</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/u1/places'>My Places</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/places/new'>Add Place</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/auth'>Authenticate</NavLink>
      </li>
    </ul>
  )
}

export default NavLinks
