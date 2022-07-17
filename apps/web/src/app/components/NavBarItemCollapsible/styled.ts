import styled from 'styled-components'
import { Collapse, List, ListItem, ListItemIcon, ListItemText, MenuItem } from '@mui/material'
import { Add, Delete, Edit } from '@mui/icons-material'

import NavBarItem from '../NavBarItem'

export const NavListItem = styled(ListItem)`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`

export const NoLink = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 100%;
`

export const Text = styled(ListItemText)`
  margin-right: 1rem;
`

export const Icon = styled(ListItemIcon)`
  min-width: 0;
  margin-right: 1rem;  
`

export const Collapsible = styled(Collapse)`
  width: 100%;
`

export const NavList = styled(List)``

export const Item = styled(NavBarItem)``

export const MenuItemDelete = styled(MenuItem)`
  color: ${({ theme }) => theme.palette.error.main};
`

export const AddIcon = styled(Add)`
  margin-right: 1rem;
`

export const EditIcon = styled(Edit)`
  margin-right: 1rem;
`

export const DeleteIcon = styled(Delete)`
  margin-right: 1rem;
`