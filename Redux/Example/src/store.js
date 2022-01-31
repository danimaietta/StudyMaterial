import { createStore, combineReducers } from 'redux'

const initalState1 = ['first item', 'second item']

function toDoListReducer(state = initalState1, action) {
  const { type, value, index } = action
  console.log(action)
  switch (type) {
    case 'ADD_ITEM':
      return new Array(...state, value)
    case 'UPDATE_ITEM':
      state[index] = value
      return [...state]
    case 'DELETE_ITEM':
      return state.filter((v, i) => i !== index)
    default:
      return [...state]
  }
}

const initalState2 = {
  inputValue: ''
}

function inputReducer(state = initalState2, action) {
  switch (action.type) {
    case 'INCREMENT':
      return [...state, 1]
    default:
      return state
  }
}

export const store = createStore(combineReducers({ toDoListReducer, inputReducer }))
