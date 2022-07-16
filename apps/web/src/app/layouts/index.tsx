import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'

import * as SC from './styled'


const Layout = () => {
  const [open, setOpen] = useState(true)

  const onMenuClick = () => {
    setOpen(!open)
  }

  return (
    <SC.Container>      
      <SC.Header
        onMenuClick={onMenuClick}
        open={open}
      />
      <SC.Main open={open}>
        <SC.Navigation
          open={open}
        />
        <SC.Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </SC.Content>
      </SC.Main>
      {/* <Footer /> */}
    </SC.Container>
  )
}

export default Layout
