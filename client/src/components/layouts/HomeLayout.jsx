import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../others/footer/Footer'
import Navbar from '../others/navbar/Navbar'

const HomeLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout