import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import { getTodosAsIds } from '../selectors/todo'

const TodosList = ({ todosAsIds }) => {
  return (
    <ul style={{listStyle: 'none', padding: 0}}>
      {todosAsIds.map(todoId => (
        <TodoItem key={todoId} todoId={todoId} />
      ))}
    </ul>
  )
}

const mapStateToProps = state => ({
  todosAsIds: getTodosAsIds(state),
})

export default connect(mapStateToProps)(TodosList)
