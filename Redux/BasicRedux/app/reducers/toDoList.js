const initalState = ['first item', 'second item']

const toDoListReducer = (state = initalState, action) => {
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

export default toDoListReducer
