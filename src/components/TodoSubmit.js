import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import { bindActionCreators } from 'redux'
import { doAddTodo } from '../actions/todo'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.todo = React.createRef()
  }
  submitTodo = () => {
    const { addTodo } = this.props
    addTodo(uuid(), this.todo.current.value)
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodo: doAddTodo,
    },
    dispatch,
  )

export default connect(null, mapDispatchToProps)(Todo)
