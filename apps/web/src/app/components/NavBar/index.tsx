import React from 'react'
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import Link from '../Link'

const drawerWidth = 240;

type NavBarProps = {
  className?: string,
  open: boolean,
  onMenuClick: () => void,
}

const NavBar = (props: NavBarProps) => {
  const { className, open, onMenuClick } = props
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
      className={className}
    >
      <div>
        <IconButton onClick={onMenuClick}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem key={0} disablePadding>
          <Link to="/dashboard">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </Link>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default NavBar
