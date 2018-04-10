import { combineReducers } from 'redux'
import todoReducer from './todo'
import filterReducer from './filter'
import notificationReducer from './notification'

const rootReducer = combineReducers({
  todoState: todoReducer,
  filterState: filterReducer,
  notificationState: notificationReducer
})

export default rootReducer
