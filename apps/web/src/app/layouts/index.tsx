import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

import * as SC from './styled'


const Layout = () => {
  return (
    <SC.Container>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </SC.Container>
  )
}

export default Layout
