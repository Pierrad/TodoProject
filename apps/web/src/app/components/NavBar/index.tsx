import React, { useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import NavBarItem from '../NavBarItem'
import NavBarItemCollapsible from '../NavBarItemCollapsible'
import { Add } from '@mui/icons-material'
import ManageGroupDialog from '../ManageGroupDialog'

import * as SC from './styled'

const drawerWidth = 240;

type NavBarProps = {
  className?: string,
  open: boolean,
}

const NavBar = (props: NavBarProps) => {
  const { className, open,  } = props
  const [manageGroupDialogOpen, setManageGroupDialogOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))


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
        <NavBarItem
          isActive={location.pathname === '/dashboard'}
          to="/dashboard"
          label={t('dashboard')}
          icon={<HomeIcon />}
        />
        <NavBarItemCollapsible
          label="IUT"
          items={
            [
              {
                to: '/group/iut/1',
                label: 'IUT 1',
                icon: <FormatListBulletedIcon />,
                isActive: location.pathname.includes('/group/iut/1'),
                canBeEdited: true,
              },
              {
                to: '/group/iut/2',
                label: 'IUT 2',
                icon: <FormatListBulletedIcon />,
                isActive: location.pathname.startsWith('/group/iut/2'),
                canBeEdited: true,
              },
              {
                to: '/group/iut/3',
                label: 'IUT 3',
                icon: <FormatListBulletedIcon />,
                isActive: location.pathname.startsWith('/group/iut/3'),
                canBeEdited: true,
              },
            ]
          }
        />
      </SC.NavList>
      <SC.AddCategory variant="text" onClick={() => setManageGroupDialogOpen(true)}>
        <Add />
        {t('navBar_contextMenu_add_group')}
      </SC.AddCategory>
      <ManageGroupDialog
        open={manageGroupDialogOpen}
        onClose={() => setManageGroupDialogOpen(false)}
        title={t('navBar_contextMenu_add_group')}
      />
    </SC.Nav>
  )
}

export default NavBar
