import { TODO_ADD, TODO_TOGGLE, TODO_UPDATE, FILTER_SET } from '../constants/actionTypes'

export function doAddTodo(id, name) {
  return {
    type: TODO_ADD,
    todo: { id, name },
  }
}

export function doToggleTodo(id) {
  return {
    type: TODO_TOGGLE,
    todo: { id },
  }
}

export function doUpdateTodo(id, name) {
  return {
    type: TODO_UPDATE,
    todo: { id, name },
  }
}

export function doSetFilter(filter) {
  return {
    type: FILTER_SET,
    filter
  }
}
