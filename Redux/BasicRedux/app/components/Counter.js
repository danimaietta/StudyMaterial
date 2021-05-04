import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, add } from '../actions'

export default function Counter() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <>
      <h2>The counter value is: {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(add(10))}>add 10</button>
    </>
  )
}
