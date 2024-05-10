import React from 'react'
import { Outlet } from 'react-router-dom'
import SiteNav from '../Components/Nav'
import Footer from '../Components/Footer'

export default function Main() {
  return (

      <>


          <SiteNav></SiteNav>

          <div className='container'>
                  <Outlet></Outlet>
          </div>


          <Footer></Footer>
      </>

  )
}
