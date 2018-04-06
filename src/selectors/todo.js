export const getNextTodoId = state => {
  return Math.max(...state.todoState.map(todo => todo.id)) + 1
}
