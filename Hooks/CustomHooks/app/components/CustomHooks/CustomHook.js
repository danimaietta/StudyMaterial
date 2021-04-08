import React from 'react'
import useHover from './useHover'
import useTheme from './useTheme'
import useAuth from './useAuth'
import Info from '../Info'

/*
  Enhanced Components:  Info 
  RP:                   useHover, useTheme, useAuth
*/
export default function CustomHook() {
  const [hovering, attrs] = useHover()
  const theme = useTheme('blue')
  const authed = useAuth(1234)

  const message = {
    message: 'hello world'
  }

  return (
    <div {...attrs} {...theme}>
      {authed ? <Info {...message} /> : <h5>You don't have access</h5>}
      {hovering && <h5>Message when you hover </h5>}
    </div>
  )
}
