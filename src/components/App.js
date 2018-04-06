import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Todo from './Todo'
import TodoList from './TodosList'

import { doAddTodo, doToggleTodo } from '../actions/todo'
import { getNextTodoId } from '../selectors/todo'

class App extends React.Component {
  render() {
    const { todos, addTodo, nextTodoId, toggleTodo } = this.props
    return (
      <div>
        <Todo addTodo={addTodo} nextTodoId={nextTodoId} />
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todoState,
  nextTodoId: getNextTodoId(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodo: doAddTodo,
      toggleTodo: doToggleTodo
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(App)
