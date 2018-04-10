import { TODO_ADD, NOTIFICATION_HIDE } from '../constants/actionTypes'

function notificationReducer(state = {}, action) {
  switch (action.type) {
    case TODO_ADD:
      return applySetNotifyAboutAddTodo(state, action)
    case NOTIFICATION_HIDE:
      return applyHideNotifcation(state, action)
    default:
      return state
  }
}

const applySetNotifyAboutAddTodo = (state, action) => {
  const { name, id } = action.todo
  return { ...state, [id]: `Todo Created: ${name}` }
}

const applyHideNotifcation = (state, action) => {
  const { [action.id]: notificationToRemove, ...restNotifications } = state
  return restNotifications
}

export default notificationReducer
