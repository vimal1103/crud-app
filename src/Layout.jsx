import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet/>
        <Footer />
    </>
  )
}

export default Layout