import { Checkbox } from '@mui/material'
import React, { useState } from 'react'

import * as SC from './styled'

export type TaskProps = {
  className?: string,
  name: string,
  status: boolean,
  onChange: () => void,
  onClick?: () => void,
  dueDate: string,
}

const Task = (props: TaskProps) => {
  const { className, name, status, onChange, onClick, dueDate } = props
  const [checked, setChecked] = useState(status)

  const handleChange = () => {
    setChecked(!checked)
    onChange()
  }

  return (
    <SC.Container className={className}>
      <Checkbox 
        checked={checked}
        onChange={handleChange}
      />
      <SC.Info onClick={onClick}>
        <SC.Name>{name}</SC.Name>
        <SC.DueDate>{dueDate}</SC.DueDate>
      </SC.Info>
    </SC.Container>
  )
}

export default Task
