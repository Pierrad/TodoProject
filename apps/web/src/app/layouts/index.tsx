import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

import { SWITCH_LANGUAGE, SWITCH_THEME } from "@todo-project/redux";
import { DispatchType, GlobalStateType } from "@todo-project/models";

import Dashboard from '../pages/Dashboard'
import Group from '../pages/Group'
import Home from '../pages/Home'
import Settings from '../pages/Settings'
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import * as SC from './styled'

type LayoutProps = {
  switchTheme: () => void
  setLanguage: (value: string) => void
}

const Layout = (props: LayoutProps) => {
  const { switchTheme, setLanguage } = props
  const [open, setOpen] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      setIsAuthorized(false)
    }
  }, [location])      

  const handleSwitchTheme = () => {
    switchTheme()
  }

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
  }

  const onMenuClick = () => {
    setOpen(!open)
  }

  return (
    <SC.Container>
      {isAuthorized && (
        <SC.Header
          onMenuClick={onMenuClick}
          open={open}
          onThemeClick={handleSwitchTheme}
          onLanguageClick={handleLanguageChange}
        />
      )}
      <SC.Main open={open} isAuthorized={isAuthorized}>
        {isAuthorized && (
          <SC.Navigation
            open={open}
          />
        )}
        <SC.Content isAuthorized={isAuthorized}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />	
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

const mapStateToProps = (state: GlobalStateType) => ({
})

const mapDispatchToProps = (dispatch: (action: DispatchType) => void) => ({
  switchTheme: () => dispatch({ type: SWITCH_THEME }),
  setLanguage: (language: string) => dispatch({ type: SWITCH_LANGUAGE, payload: language }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)

