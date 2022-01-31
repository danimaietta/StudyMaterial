import counterReducer from './counter'
import loggedReducer from './isLogged'
import toDoListReducer from './toDoList'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
  toDoList: toDoListReducer
})

export default rootReducer
