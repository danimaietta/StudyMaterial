export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const add = num => {
  return {
    type: 'ADD',
    num
  }
}

export const logIn = () => {
  return {
    type: 'SIGN_IN'
  }
}

// -------------------------------

export const updateItem = () => {
  return {
    type: 'UPDATE_ITEM',
    value,
    index
  }
}

export const delete_item = () => {
  return {
    type: 'DELETE_ITEM',
    index
  }
}

export const addItem = num => {
  return {
    type: 'ADD_ITEM',
    value
  }
}
