import React from 'react'
import { ListItemText, useMediaQuery, useTheme } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import Link from '../Link'

import * as SC from './styled'
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const drawerWidth = 240;

type NavBarProps = {
  className?: string,
  open: boolean,
}

const NavBar = (props: NavBarProps) => {
  const { className, open,  } = props
  const location = useLocation()
  const { t } = useTranslation()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));


  return (
    <SC.Nav
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isDesktop ? drawerWidth : '100%',
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
      className={className}
    >
      <SC.NavList>
        <SC.NavListItem key={0} disablePadding active={location.pathname === '/dashboard'}>
          <Link to="/dashboard">
            <SC.Icon>
              <HomeIcon />
            </SC.Icon>
            <ListItemText primary={t('dashboard')} />
          </Link>
        </SC.NavListItem>
      </SC.NavList>
    </SC.Nav>
  )
}

export default NavBar
