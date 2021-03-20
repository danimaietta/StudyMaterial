import React from 'react'

function reducer(state, value) {
  console.log(state, value)
  return state + value
}

export default function Counter() {
  const [count, dispatch] = React.useReducer(reducer, 0)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(1)}>+</button>
    </>
  )
}
