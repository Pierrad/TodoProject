import { Delete, Edit } from '@mui/icons-material'
import { ListItem, ListItemIcon, MenuItem } from '@mui/material'
import styled from 'styled-components'

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

export const MenuItemDelete = styled(MenuItem)`
  color: ${({ theme }) => theme.palette.error.main};
`

export const EditIcon = styled(Edit)`
  margin-right: 1rem;
`

export const DeleteIcon = styled(Delete)`
  margin-right: 1rem;
`