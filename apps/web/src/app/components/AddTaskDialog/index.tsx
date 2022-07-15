import React from 'react'

import * as SC from './styled'

type AddTaskDialogProps = {
  className?: string,
  open: boolean,
  onClose: () => void,
}

const AddTaskDialog = (props: AddTaskDialogProps) => {
  const { className, open, onClose } = props

  const handleSubmit = () => {
    onClose()
  }

  return (
    <SC.Container className={className} open={open} onClose={onClose}>
      <SC.Title>Add Task</SC.Title>
      <SC.Content>
        <SC.Input
          required
          id="outlined-required"
          label="Name"
        />
        <SC.Input
          required
          id="outlined-required"
          label="Description"
        />
        <SC.Input
          id="date"
          label="Due Date"
          type="date"
          // defaultValue="2017-05-24"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <SC.Submit variant="outlined" onClick={handleSubmit}>Save</SC.Submit>
      </SC.Content>
    </SC.Container>
  )
}

export default AddTaskDialog
