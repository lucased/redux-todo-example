import { TODO_ADD, TODO_TOGGLE, TODO_UPDATE } from '../constants/actionTypes'

const todos = [
  { id: '1', name: 'Hands On: Redux Standalone with advanced Actions' },
  { id: '2', name: 'Hands On: Redux Standalone with advanced Reducers' },
  { id: '3', name: 'Hands On: Bootstrap App with Redux' },
  { id: '4', name: 'Hands On: Naive Todo with React and Redux' },
  { id: '5', name: 'Hands On: Sophisticated Todo with React and Redux' },
  { id: '6', name: 'Hands On: Connecting State Everywhere' },
  { id: '7', name: 'Hands On: Todo with advanced Redux' },
  { id: '8', name: 'Hands On: Todo but more Features' },
  { id: '9', name: 'Hands On: Todo with Notifications' },
  { id: '10', name: 'Hands On: Hacker News with Redux' },
]



function todoReducer(state = todos, action) {
  switch (action.type) {
    case TODO_ADD: {
      return applyAddTodo(state, action)
    }
    case TODO_UPDATE: {
      return applyUpdateTodo(state, action)
    }
    case TODO_TOGGLE: {
      return applyToggleTodo(state, action)
    }
    default:
      return state
  }
}

function applyAddTodo(state, action) {
  const todo = { ...action.todo, completed: false }
  return [...state, todo]
}

function applyUpdateTodo(state, action) {
  const todos = state.map(
    todo => (todo.id === action.todo.id ? { ...todo, name: action.todo.name } : todo),
  )
  return todos
}

function applyToggleTodo(state, action) {
  const todos = state.map(
    todo => (todo.id === action.todo.id ? { ...todo, completed: !todo.completed } : todo),
  )
  return todos
}

export default todoReducer
