import React, { useState } from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse } from '@mui/material'
import { useTranslation } from 'react-i18next'
import AddTask from '../AddTask'
import Task, { TaskProps } from '../Task'
import TaskDetailDialog from '../TaskDetailDialog'

import * as SC from './styled'

type TaskBoardProps = {
  className?: string,
  title: string,
  tasks: TaskProps[],
  completedTasks?: TaskProps[],
}

const TaskBoard = (props: TaskBoardProps) => {
  const { className, title, tasks, completedTasks } = props
  const { t } = useTranslation()
  const [currentTask, setCurrentTask] = useState<TaskProps | null>(null)
  const [isTaskDetailDialogOpen, setIsTaskDetailDialogOpen] = useState(false)
  const [hasOpenCompletedTasks, setHasOpenCompletedTasks] = useState(false)

  const handleTaskDetailDialog = (task: TaskProps) => {
    setCurrentTask(task)
    setIsTaskDetailDialogOpen(!isTaskDetailDialogOpen)
  }

  return (
    <SC.Container className={className}>
      <SC.Title>{title}</SC.Title>
      <AddTask />
      <SC.Tasks>
        {tasks && tasks.length > 0 && tasks.map((task, index) => (
          <Task key={index} {...task} onClick={() => handleTaskDetailDialog(task)} />
        ))}
      </SC.Tasks>
      <SC.CompletedTasks>
        {completedTasks && completedTasks.length > 0 && (
          <>
            <SC.CompletedTasksTitle onClick={() => setHasOpenCompletedTasks(!hasOpenCompletedTasks)}>
              {t('completedTasks', { count: completedTasks.length })}
              {hasOpenCompletedTasks ? <ExpandLess /> : <ExpandMore />}
            </SC.CompletedTasksTitle>
            <Collapse in={hasOpenCompletedTasks} timeout="auto">
              <SC.Tasks>
                {completedTasks.map((task, index) => (
                  <Task key={index} {...task} />
                ))}
              </SC.Tasks>
            </Collapse>
          </>
        )}
      </SC.CompletedTasks>
      <TaskDetailDialog onClose={() => setIsTaskDetailDialogOpen(false)} open={isTaskDetailDialogOpen} task={currentTask} />
    </SC.Container>
  )
}  

export default TaskBoard
