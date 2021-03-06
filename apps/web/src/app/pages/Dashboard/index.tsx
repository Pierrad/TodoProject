import React from 'react'
import { TaskProps } from '../../components/Task'
import TaskBoard from '../../components/TaskBoard'

const Dashboard = () => {
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
  
  return (
    <div>
      <TaskBoard
        title="Mes tâches"
        tasks={tasks}
        completedTasks={tasks}
      />
    </div>
  )
}

export default Dashboard
