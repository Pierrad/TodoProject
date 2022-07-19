import React from 'react'
import { useLocation } from 'react-router-dom'
import { TaskProps } from '../../components/Task'
import TaskBoard from '../../components/TaskBoard'

const Group = () => {
  const location = useLocation()
  const tasks: TaskProps[] | null  = [
    {
      name: 'Task 1',
      status: true,
      onChange: () => {console.log('Task 1')},
      dueDate: '2020-01-01',
      description: 'This is a task description',
    },
    {
      name: 'Task 2',
      status: false,
      onChange: () => {console.log('Task 2')},
      dueDate: '2020-01-01',
      description: 'This is a task description',
    },
    {
      name: 'Task 3',
      status: false,
      onChange: () => {console.log('Task 3')},
      dueDate: '2020-01-01',
      description: 'This is a task description',
    },
  ]

  const category = location.pathname.split('/')[3]
  
  return (
    <div>
      <TaskBoard
        title={`${category} - Mes tâches`}
        tasks={tasks}
        completedTasks={tasks}
      />
    </div>
  )
}

export default Group
