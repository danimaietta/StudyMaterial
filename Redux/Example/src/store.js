import { createStore, combineReducers } from 'redux'

const initalState1 = ['first item', 'second item']

function toDoListReducer(state = initalState1, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log([...state, action.value])
      return [...state, action.value]
    default:
      return [...state]
  }
}

const initalState2 = {
  counter: 0
}

function reducer2(state = initalState2, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

export const store = createStore(combineReducers({ toDoListReducer, reducer2 }))
