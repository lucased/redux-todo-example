import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

// ---- STORE ---- //

const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)))

export default store
