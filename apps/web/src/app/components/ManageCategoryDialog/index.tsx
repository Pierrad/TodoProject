import React from 'react'
import { Button, TextField, Typography } from '@mui/material'

import * as SC from './styled'

type ManageCategoryDialogProps = {
  className?: string,
  open: boolean,
  onClose: () => void,
  title: string,
}

const ManageCategoryDialog = (props: ManageCategoryDialogProps) => {
  const { className, open, onClose, title } = props

  return (
    <SC.Container className={className} open={open} onClose={onClose}>
      <SC.Title>{title}</SC.Title>
      <SC.Content>
        <TextField id="name" label="Nom" variant="outlined" required />
        <SC.Color>
          <input type="color" id="color" name="color" value="#e66465" />
          <Typography>Couleur</Typography>
        </SC.Color>
        <Button variant="contained">
          Ajouter
        </Button>
      </SC.Content>
    </SC.Container>
  )
}

export default ManageCategoryDialog
