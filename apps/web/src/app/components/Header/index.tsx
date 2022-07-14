import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';

type HeaderProps = {
  className?: string,
  open: boolean,
  onMenuClick: () => void,
}

const Header = (props: HeaderProps) => {
  const { className, open, onMenuClick } = props
  const { t } = useTranslation()
  
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
        <Typography variant="h6" noWrap component="div">
          {t('header_title')}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
