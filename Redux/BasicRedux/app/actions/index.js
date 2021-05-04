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
