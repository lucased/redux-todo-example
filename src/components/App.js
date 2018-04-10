import React from 'react'
import TodoFilter from './TodoFilter'
import TodoSubmit from './TodoSubmit'
import TodoList from './TodosList'
import Notifications from './Notifications'

const App = () => (
  <div>
    <TodoFilter />
    <TodoSubmit />
    <TodoList />
    <Notifications />
  </div>
)

export default App
