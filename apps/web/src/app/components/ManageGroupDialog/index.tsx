import React from 'react'
import { Button, TextField } from '@mui/material'

import * as SC from './styled'

type ManageGroupDialogProps = {
  className?: string,
  open: boolean,
  onClose: () => void,
  title: string,
}

const ManageGroupDialog = (props: ManageGroupDialogProps) => {
  const { className, open, onClose, title } = props

  return (
    <SC.Container className={className} open={open} onClose={onClose}>
      <SC.Title>{title}</SC.Title>
      <SC.Content>
        <TextField id="name" label="Nom" variant="outlined" required />
        <Button variant="contained">
          Ajouter
        </Button>
      </SC.Content>
    </SC.Container>
  )
}

export default ManageGroupDialog
