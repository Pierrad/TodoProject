import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { SET_THEME } from '@todo-project/redux';


import Dashboard from '../pages/Dashboard'
import Group from '../pages/Group'
import Home from '../pages/Home'
import Settings from '../pages/Settings'

import * as SC from './styled'
import { connect } from 'react-redux'

type LayoutProps = {
  theme: string
  switchTheme: (value: string) => void
}

const Layout = (props: LayoutProps) => {
  const { theme, switchTheme } = props
  const [open, setOpen] = useState(true)

  const handleSwitchTheme = () => {
    if (theme === 'light') {
      switchTheme('dark')
    } else {
      switchTheme('light')
    }
  }

  const onMenuClick = () => {
    setOpen(!open)
  }

  return (
    <SC.Container>
      <SC.Header
        onMenuClick={onMenuClick}
        open={open}
        onThemeClick={handleSwitchTheme}
      />
      <SC.Main open={open}>
        <SC.Navigation
          open={open}
        />
        <SC.Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/group/:group/:category" element={<Group />} />
          </Routes>
        </SC.Content>
      </SC.Main>
      {/* <Footer /> */}
    </SC.Container>
  )
}

const mapStateToProps = (state: any) => ({
  theme: state.app?.theme,
})

type DispatchType = {
  type: string
  payload: any
}

const mapDispatchToProps = (dispatch: (obj: DispatchType) => void) => ({
  switchTheme: (value: string) => dispatch({ type: SET_THEME, payload: value }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

