import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import * as SC from './styled'

type ManageCategoryDialogProps = {
  className?: string,
  open: boolean,
  onClose: () => void,
  title: string,
  toRemove?: boolean,
}

const ManageCategoryDialog = (props: ManageCategoryDialogProps) => {
  const { className, open, onClose, title, toRemove } = props
  const { t } = useTranslation()

  return (
    <SC.Container className={className} open={open} onClose={onClose}>
      <SC.Title>{title}</SC.Title>
      <SC.Content>
        {!toRemove ? (
          <>
            <TextField id="name" label="Nom" variant="outlined" required />
            <SC.Color>
              <input type="color" id="color" name="color" value="#e66465" />
              <Typography>Couleur</Typography>
            </SC.Color>
            <Button variant="contained">
              {t('add')}
            </Button>
          </>
        ) : (
          <Button variant="contained" color="error">
            {t('remove')}
          </Button>
        )}

      </SC.Content>
    </SC.Container>
  )
}

export default ManageCategoryDialog
