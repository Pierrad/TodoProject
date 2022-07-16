import React from 'react'
import { useTranslation } from 'react-i18next'

import * as SC from './styled'

type AddTaskProps = {
  className?: string,
}

const AddTask = (props: AddTaskProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <SC.Container className={className}>
      <SC.Content>
        <SC.Form>
          <SC.PrimaryInput placeholder={t('add_task_name_placeholder')} autoFocus />
          <SC.SecondaryInput placeholder={t('add_task_description_placeholder')} />
          <SC.DateInput type="datetime-local" />
        </SC.Form>
      </SC.Content>
      <SC.Actions>
        <SC.Cancel variant="outlined">{t('cancel')}</SC.Cancel>
        <SC.Submit variant="contained">{t('add')}</SC.Submit>
      </SC.Actions>
    </SC.Container>
  )
}

export default AddTask
