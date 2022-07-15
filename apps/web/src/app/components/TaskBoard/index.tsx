import React, { useState } from 'react'
import AddTaskDialog from '../AddTaskDialog'
import Task, { TaskProps } from '../Task'
import TaskDetailDialog from '../TaskDetailDialog'

import * as SC from './styled'

type TaskBoardProps = {
  className?: string,
  title: string,
  tasks: TaskProps[],
  ctaLabel: string,
}

const TaskBoard = (props: TaskBoardProps) => {
  const { className, title, tasks, ctaLabel } = props
  const [currentTask, setCurrentTask] = useState<TaskProps | null>(null)
  const [isAddTaskDialogOpen, setIsAddTaskDialogOpen] = useState(false)
  const [isTaskDetailDialogOpen, setIsTaskDetailDialogOpen] = useState(false)


  const handleAddTaskDialog = () => {
    setIsAddTaskDialogOpen(!isAddTaskDialogOpen)
  }

  const handleTaskDetailDialog = (task: TaskProps) => {
    setCurrentTask(task)
    setIsTaskDetailDialogOpen(!isTaskDetailDialogOpen)
  }

  return (
    <SC.Container className={className}>
      <SC.Title>{title}</SC.Title>
      <SC.Tasks>
        {tasks.map((task, index) => (
          <Task key={index} {...task} onClick={() => handleTaskDetailDialog(task)} />
        ))}
      </SC.Tasks>
      <SC.AddTask variant="outlined" onClick={handleAddTaskDialog}>{ctaLabel}</SC.AddTask>
      <AddTaskDialog onClose={handleAddTaskDialog} open={isAddTaskDialogOpen} />
      <TaskDetailDialog onClose={() => setIsTaskDetailDialogOpen(false)} open={isTaskDetailDialogOpen} task={currentTask} />
    </SC.Container>
  )
}  

export default TaskBoard
