import { createStore, combineReducers } from 'redux'

const initalState1 = ['first item', 'second item']

function toDoListReducer(state = initalState1, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.value]
    case 'UPDATE_ITEM':
      state[action.index] = action.value
      return [...state]
    case 'DELETE_ITEM':
      return state.filter((v, i) => i !== action.index)
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
