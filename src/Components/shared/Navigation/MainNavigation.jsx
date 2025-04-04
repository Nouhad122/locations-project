import React, { useState} from 'react'
import classes from './MainNavigation.module.css'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../UI/Backdrop'
const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () =>{
    setDrawerIsOpen(true);
  }

  const closeDrawerHandler = () =>{
    setDrawerIsOpen(false);
  }

  return (
    <>
    {
      drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />
    }
    
    <SideDrawer show={drawerIsOpen}>
      <nav className={classes['main-navigation__drawer-nav']}>
        <NavLinks />
      </nav>
    </SideDrawer>
     
      <MainHeader>
        <button onClick={openDrawerHandler} className={classes['main-navigation__menu-btn']}>
            <span />
            <span />
            <span />
        </button>
        <h1 className={classes['main-navigation__title']}>
            <Link to="/">Your Places</Link>
        </h1>
        <nav className={classes['main-navigation__header-nav']}>
            <NavLinks />
        </nav>
      </MainHeader>
    </>
  )
}

export default MainNavigation
