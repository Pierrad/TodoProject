import { Menu } from '@mui/material'
import React from 'react'

import * as SC from './styled'

type ContextMenuProps = {
  className?: string,
  open: {
    mouseX: number,
    mouseY: number,
  } | null,
  onClose: () => void,
  children: React.ReactNode,
}

const ContextMenu = (props: ContextMenuProps) => {
  const { className, open, onClose, children } = props

  return (
    <Menu
      className={className}
      open={open !== null}
      onClose={onClose}
      anchorReference="anchorPosition"
      anchorPosition={
        open !== null
          ? { top: open.mouseY, left: open.mouseX }
          : undefined
      }
    >
      {children}
    </Menu>
  )
}

export default ContextMenu
