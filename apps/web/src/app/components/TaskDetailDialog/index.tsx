import React from 'react'
import { TaskProps } from '../Task'

import * as SC from './styled'

type TaskDetailDialogProps = {
  className?: string,
  open: boolean,
  onClose: () => void,
  task: TaskProps | null,
}

const TaskDetailDialog = (props: TaskDetailDialogProps) => {
  const { className, open, onClose, task } = props

  if (!task) {
    return null
  }

  return (
    <SC.Container className={className} open={open} onClose={onClose}>
      <SC.Title>{task.name}</SC.Title>
      <SC.Content>
        <SC.Date>{task.dueDate}</SC.Date>
      </SC.Content>
    </SC.Container>
  )
}

export default TaskDetailDialog
