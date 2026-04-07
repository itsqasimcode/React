import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router'


export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}
