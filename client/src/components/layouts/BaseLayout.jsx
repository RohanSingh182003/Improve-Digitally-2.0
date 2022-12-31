import React from 'react'
import { Outlet } from 'react-router-dom'
import Chat from '../others/chat/Chat'
import Footer from '../others/footer/Footer'
import Navbar from '../others/navbar/Navbar'
import ToastifyContainer from '../others/toast/ToastifyContainer'

const HomeLayout = () => {
  return (
    <>
        <Navbar/>
        <ToastifyContainer/>
        <Outlet/>
        <Chat/>
        <Footer/>
    </>
  )
}

export default HomeLayout