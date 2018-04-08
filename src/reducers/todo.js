import { schema, normalize } from 'normalizr'
import { TODO_ADD, TODO_TOGGLE, TODO_UPDATE, TODO_DELETE } from '../constants/actionTypes'

const todos = [
  { id: '1', name: 'Hands On: Redux Standalone with advanced Actions', completed: false },
  { id: '2', name: 'Hands On: Redux Standalone with advanced Reducers', completed: false },
  { id: '3', name: 'Hands On: Bootstrap App with Redux', completed: false },
  { id: '4', name: 'Hands On: Naive Todo with React and Redux', completed: false },
  { id: '5', name: 'Hands On: Sophisticated Todo with React and Redux', completed: false },
  { id: '6', name: 'Hands On: Connecting State Everywhere', completed: false },
  { id: '7', name: 'Hands On: Todo with advanced Redux', completed: false },
  { id: '8', name: 'Hands On: Todo but more Features', completed: false },
  { id: '9', name: 'Hands On: Todo with Notifications', completed: false },
  { id: '10', name: 'Hands On: Hacker News with Redux', completed: false },
]

const todoSchema = new schema.Entity('todo')
const normalizedTodos = normalize(todos, [todoSchema])
const initalTodoState = {
  entities: normalizedTodos.entities.todo,
  ids: normalizedTodos.result
}

function todoReducer(state = initalTodoState, action) {
  switch (action.type) {
    case TODO_ADD: 
      return applyAddTodo(state, action)
    case TODO_UPDATE:
      return applyUpdateTodo(state, action)
    case TODO_TOGGLE:
      return applyToggleTodo(state, action)
    case TODO_DELETE:
      return applyDeleteTodo(state, action)
    default:
      return state
  }
}

function applyAddTodo(state, action) {
  const todo = { ...action.todo, completed: false }
  const entities = { ...state.entities, [todo.id]: todo }
  const ids = [ ...state.ids, action.todo.id ]
  return { ...state, entities, ids }
}

function applyUpdateTodo(state, action) {
  const todos = state.map(
    todo => (todo.id === action.todo.id ? { ...todo, name: action.todo.name } : todo),
  )
  return todos
}

function applyToggleTodo(state, action) {
  const id = action.todo.id
  const todo = state.entities[id]
  const toggleTodo = { ...todo, completed: !todo.completed }
  const entities = { ...state.entities, [id]: toggleTodo }
  return { ...state, entities }
}

// Need to figure this shit out!!
function applyDeleteTodo(state, action) {
  console.log(action.todo.id)
  const entities = Object.keys(state.entities).filter(id => id !== action.todo.id.toString())
  console.log(entities)
  // const ids = state.ids.filter(id => id !== action.todo.id)
  // return { ...state, entities, ids}
  return {...state}
}

export default todoReducer
