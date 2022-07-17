import React from 'react'
import { AppBar, Avatar, IconButton, useTheme } from '@mui/material'
import { ArrowBack, ArrowForward, Brightness4, Brightness7, Flag, Settings } from '@mui/icons-material';

import * as SC from './styled'

type HeaderProps = {
  className?: string,
  open: boolean,
  onMenuClick: () => void,
}

const Header = (props: HeaderProps) => {
  const { className, open, onMenuClick } = props
  const theme = useTheme()


  return (
    <AppBar position="fixed" className={className}>
      <SC.Wrapper>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
          edge="start"
        >
          {open ? <ArrowBack /> : <ArrowForward />}
        </IconButton>
        <SC.Right>
          <IconButton color="secondary">
            <Flag />
          </IconButton>
          <IconButton color="secondary">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton color="secondary">
            <Settings />
          </IconButton>
          <Avatar
            src="assets/images/avatar.jpg"
            alt="avatar"
          />
        </SC.Right>
        
      </SC.Wrapper>
    </AppBar>
  )
}

export default Header
