import { Drawer, List, ListItem, ListItemIcon } from '@mui/material'
import styled from 'styled-components'

export const Nav = styled(Drawer)`
  .MuiDrawer-paper {
    top: 64px;
  }
`

export const NavList = styled(List)`
  margin-top: 1rem;
`

export const NavListItem = styled(ListItem)<{ active: boolean }>`
  background-color: ${({ active, theme }) =>
    active ? theme.palette.background.link : 'transparent'};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`

export const Icon = styled(ListItemIcon)`
  min-width: 0;
  margin-right: 1rem;  
`