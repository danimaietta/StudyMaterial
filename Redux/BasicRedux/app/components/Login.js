import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from '../actions'

export default function Login() {
  const logged = useSelector(state => state.logged)
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => dispatch(logIn())}>log in</button>
      <h2>{logged ? 'You are logged' : 'please log in'}</h2>
    </>
  )
}
