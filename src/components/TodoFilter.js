import React from 'react'
import { connect } from 'react-redux'
import { doSetFilter } from '../actions/todo'

const TodoFilter = ({ onSetFilter }) => (
  <div>
    <button onClick={() => onSetFilter('SHOW_ALL')}>All</button>
    <button onClick={() => onSetFilter('SHOW_COMPLETE')}>Completed</button>
    <button onClick={() => onSetFilter('SHOW_INCOMPLETE')}>Incompleted</button>
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
    onSetFilter: fitlerType => dispatch(doSetFilter(fitlerType)),
  }
}

export default connect(null, mapDispatchToProps)(TodoFilter)
