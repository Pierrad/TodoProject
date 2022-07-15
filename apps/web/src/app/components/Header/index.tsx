import React from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

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
          sx={{ mr: 2, ...(open && { display: 'none' }) as any }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
