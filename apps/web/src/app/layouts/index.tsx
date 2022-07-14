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
      <SC.Navigation
        open={open}
        onMenuClick={onMenuClick}
      />
      <SC.Main open={open}>
        <SC.Header
          open={open}
          onMenuClick={onMenuClick}
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
