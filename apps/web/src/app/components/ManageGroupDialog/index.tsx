import React from 'react'
import { Button, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'

import * as SC from './styled'

type ManageGroupDialogProps = {
  className?: string,
  open: boolean,
  onClose: () => void,
  title: string,
  toRemove?: boolean,
}

const ManageGroupDialog = (props: ManageGroupDialogProps) => {
  const { className, open, onClose, title, toRemove } = props
  const { t } = useTranslation()

  return (
    <SC.Container className={className} open={open} onClose={onClose}>
      <SC.Title>{title}</SC.Title>
      <SC.Content>
        {!toRemove ? (
          <>
            <TextField id="name" label="Nom" variant="outlined" required />
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

export default ManageGroupDialog
