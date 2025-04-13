import React, { useContext } from 'react'
import classes from './NavLinks.module.css'
import { NavLink } from 'react-router-dom'
import AuthContext  from '../../../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
const NavLinks = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout} = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
    navigate('/auth');
  }

  return (
    <ul className={classes['nav-links']}>
      <li>
        <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/'>All Users</NavLink>
      </li>

      {isLoggedIn && (
        <li>
          <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/u1/places'>My Places</NavLink>
        </li>
      )}

      {isLoggedIn && (
        <li>
          <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/places/new'>Add Place</NavLink>
        </li>
      )}

      {!isLoggedIn && (
        <li>
          <NavLink className={({ isActive }) => isActive ? classes.active : ''} to='/auth'>Authenticate</NavLink>
        </li>
      )}

      {isLoggedIn && (
        <li>
          <button className={classes['nav-links__button']} onClick={logoutHandler}>Logout</button>
        </li>
      )}
    </ul>
  )
}

export default NavLinks
