import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../../Components/shared/Navigation/MainNavigation'
const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootPage
