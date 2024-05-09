// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'

const Layout = () => {
  return (
  <>
    <Header/>
    <div>
        <Routers/>
    </div>
    <Footer/>
  </>
  )
}

export default Layout