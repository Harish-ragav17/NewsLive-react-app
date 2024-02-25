import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = ({home,handleClick,handleClick2}) => {
  return (
    <main>
        <Header home={home} handleClick={handleClick} handleClick2={handleClick2}/>
        <Outlet/>z
    </main>
  )
}
export default Layout