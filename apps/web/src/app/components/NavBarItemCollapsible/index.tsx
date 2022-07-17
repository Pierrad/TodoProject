import React, { useEffect, useState } from 'react'
import { NavBarItemProps } from '../NavBarItem'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next'

import * as SC from './styled'
import ContextMenu from '../ContextMenu'

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
  const { t } = useTranslation()

  useEffect(() => {
    if (items.some(item => item.isActive)) {
      setOpen(true)
    }
  }, [items])


  const handleClick = () => {
    setOpen(!open)
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
        <MenuItem onClick={handleClose}>
          <SC.EditIcon />
          {t('navBar_contextMenu_edit')}
        </MenuItem>
        <SC.MenuItemDelete onClick={handleClose}>
          <SC.DeleteIcon />
          {t('navBar_contextMenu_delete')}
        </SC.MenuItemDelete>
      </ContextMenu>
    </SC.NavListItem>
  )
}

export default NavBarItemCollapsible
