import React, { useState } from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useSpring, animated } from 'react-spring'


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
  const animationProps1 = useSpring({ from: { opacity: 0, y: 20 }, to: { opacity: 1, y: 0 }, delay: 200 })
  const animationProps2 = useSpring({ from: { opacity: 0, y: 20 }, to: { opacity: 1, y: 0 }, delay: 400 })
  const animationProps3 = useSpring({ from: { opacity: 0, y: 20 }, to: { opacity: 1, y: 0 }, delay: 600 })

  const handleTaskDetailDialog = (task: TaskProps) => {
    setCurrentTask(task)
    setIsTaskDetailDialogOpen(!isTaskDetailDialogOpen)
  }

  return (
    <SC.Container className={className}>
      <animated.div style={animationProps1}>
        <SC.Title>{title}</SC.Title>
        <AddTask />
      </animated.div>
      <animated.div style={animationProps2}>
        <SC.Tasks>
          {tasks && tasks.length > 0 && tasks.map((task, index) => (
            <Task key={index} {...task} onClick={() => handleTaskDetailDialog(task)} />
          ))}
        </SC.Tasks>
      </animated.div>
      <animated.div style={animationProps3}>
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
      </animated.div>
      <TaskDetailDialog onClose={() => setIsTaskDetailDialogOpen(false)} open={isTaskDetailDialogOpen} task={currentTask} />
    </SC.Container>
  )
}

export default TaskBoard
