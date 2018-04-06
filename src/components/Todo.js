import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.todo = React.createRef()
  }
  submitTodo = () => {
    const { addTodo, nextTodoId } = this.props
    addTodo(nextTodoId, this.todo.current.value)
    this.todo.current.value = ''
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Add Todo" ref={this.todo} />
        <button onClick={this.submitTodo}>Submit</button>
      </div>
    )
  }
}

export default Todo
