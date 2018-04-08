const VISABILITY_FILTERS = {
  SHOW_COMPLETE: item => item.completed,
  SHOW_INCOMPLETE: item => !item.completed,
  SHOW_ALL: item => true,
}

export const getTodosAsIds = state => {
  return state.todoState.ids
    .map(id => state.todoState.entities[id])
    .filter(VISABILITY_FILTERS[state.filterState])
    .map(todo => todo.id)
}

export const getTodo = (state, todoId) => {
  return state.todoState.entities[todoId]
}
