import React, { useEffect, useState } from 'react'
import { NavBarItemProps } from '../NavBarItem'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ContextMenu from '../ContextMenu'
import ManageCategoryDialog from '../ManageCategoryDialog'
import ManageGroupDialog from '../ManageGroupDialog'


import * as SC from './styled'

type NavBarItemCollapsibleProps = {
  className?: string,
  label: string,
  items: NavBarItemProps[],
}

const NavBarItemCollapsible = (props: NavBarItemCollapsibleProps) => {
  const { className, label, items } = props
  const [open, setOpen] = useState(false)
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number
    mouseY: number
  } | null>(null)
  const [manageCategoryDialogOpen, setManageCategoryDialogOpen] = useState(false)
  const [manageGroupDialogOpen, setManageGroupDialogOpen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    if (items.some(item => item.isActive)) {
      setOpen(true)
    }
  }, [items])


  const handleClick = () => {
    if (contextMenu === null) {
      setOpen(!open)
    }
  }

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
    <SC.NavListItem className={className} disablePadding onClick={handleClick}>
      <SC.NoLink onContextMenu={handleContextMenu}>
        <SC.Icon>
          {open ? <ExpandLess /> : <ExpandMore />}
        </SC.Icon>
        <SC.Text primary={label} />
      </SC.NoLink>
      <SC.Collapsible in={open} timeout="auto">
        <SC.NavList>
          {items.map((item, index) => (
            <SC.Item key={index} {...item} />
          ))}
        </SC.NavList>
      </SC.Collapsible>
      <ContextMenu
        open={contextMenu}
        onClose={handleClose}
      >
        <MenuItem onClick={() => setManageCategoryDialogOpen(true)}>
          <SC.AddIcon />
          {t('navBar_contextMenu_add')}
        </MenuItem>
        <MenuItem onClick={() => setManageGroupDialogOpen(true)}>
          <SC.EditIcon />
          {t('navBar_contextMenu_edit')}
        </MenuItem>
        <SC.MenuItemDelete onClick={handleClose}>
          <SC.DeleteIcon />
          {t('navBar_contextMenu_delete')}
        </SC.MenuItemDelete>
      </ContextMenu>
      <ManageGroupDialog
        open={manageGroupDialogOpen}
        onClose={() => setManageGroupDialogOpen(false)}
        title={t('navBar_contextMenu_edit_group')}
      />
      <ManageCategoryDialog
        open={manageCategoryDialogOpen}
        onClose={() => setManageCategoryDialogOpen(false)}
        title={t('navBar_contextMenu_add_category')}
      />
    </SC.NavListItem>
  )
}

export default NavBarItemCollapsible
