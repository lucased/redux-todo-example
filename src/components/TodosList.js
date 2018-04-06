import React from 'react'

const TodosList = ({ todos, toggleTodo }) => {
  return (
    <ul style={{listStyle: 'none', padding: 0}}>
      {todos.map(todo => (
        <li key={todo.id}>
          <input checked={todo.completed} onChange={() => toggleTodo(todo.id)} type="checkbox" />
          <span style={{textDecoration: todo.completed && 'line-through'}}>{todo.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default TodosList
