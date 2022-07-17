import { ListItemText, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ContextMenu from '../ContextMenu'
import Link from '../Link'
import ManageCategoryDialog from '../ManageCategoryDialog'

import * as SC from './styled'

export type NavBarItemProps = {
  className?: string,
  isActive: boolean,
  to: string,
  label: string,
  icon: React.ReactElement,
  canBeEdited?: boolean,
}

const NavBarItem = (props: NavBarItemProps) => {
  const { className, isActive, to, label, icon, canBeEdited  } = props
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number
    mouseY: number
  } | null>(null)
  const [manageCategoryDialogOpen, setManageCategoryDialogOpen] = useState(false)
  const { t } = useTranslation()

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault()
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null,
    )
  }

  const handleClose = () => {
    setContextMenu(null)
  }

  return (
    <SC.NavListItem className={className} disablePadding active={isActive} onContextMenu={handleContextMenu}>
      <Link to={to}>
        <SC.Icon>
          {icon}
        </SC.Icon>
        <ListItemText primary={label} />
      </Link>
      {canBeEdited && (
        <ContextMenu
        open={contextMenu}
        onClose={handleClose}
        >
          <MenuItem onClick={() => setManageCategoryDialogOpen(true)}>
            <SC.EditIcon />
            {t('navBar_contextMenu_edit')}
          </MenuItem>
          <SC.MenuItemDelete onClick={handleClose}>
            <SC.DeleteIcon />
            {t('navBar_contextMenu_delete')}
          </SC.MenuItemDelete>
        </ContextMenu>
      )}
      <ManageCategoryDialog
        open={manageCategoryDialogOpen}
        onClose={() => setManageCategoryDialogOpen(false)}
        title={t('navBar_contextMenu_edit_category')}
      />
    </SC.NavListItem>
  )
}

export default NavBarItem
