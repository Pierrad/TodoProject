import React from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material';

type HeaderProps = {
  className?: string,
  open: boolean,
  onMenuClick: () => void,
}

const Header = (props: HeaderProps) => {
  const { className, open, onMenuClick } = props
  
  return (
    <AppBar position="fixed" className={className}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
          edge="start"
        >
          {open ? <ArrowBack /> : <ArrowForward />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
