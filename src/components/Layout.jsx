import React from 'react'
import  { Outlet } from "react-router-dom"
import Home from './Home';
 const Layout=()=> {
  return (
    <>
    <div>
      <Home/>

        {/* <Link to="/about_us">About</Link>
        <Link to="/homepage">Home</Link> */}
        <Outlet/>
    </div>
    </>
  )
}

export default Layout