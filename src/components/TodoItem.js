import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getTodo } from '../selectors/todo'
import { doToggleTodo, doDeleteTodo } from '../actions/todo'

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => (
  <li>
    <input checked={todo.completed} onChange={() => toggleTodo(todo.id)} type="checkbox" />
    <span style={{ textDecoration: todo.completed && 'line-through' }}>{todo.name}</span>
    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
  </li>
)

const mapStateToProps = (state, props) => ({
  todo: getTodo(state, props.todoId),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleTodo: doToggleTodo,
      deleteTodo: doDeleteTodo
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
