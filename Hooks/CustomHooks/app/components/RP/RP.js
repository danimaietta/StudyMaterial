import React from 'react'
import WithHover from './WithHover'
import WithTheme from './WithTheme'
import WithAuth from './WithAuth'
import Info from '../Info'
/*
  Enhanced Components:  Info 
  RP:                   WithHover, WithTheme, WithAuth
*/
export default function RP() {
  return (
    <>
      <WithHover message='here'>
        {() => (
          <WithTheme color='blue'>
            {() => (
              <WithAuth code={1234}>
                {() => <Info message='hello world' />}
              </WithAuth>
            )}
          </WithTheme>
        )}
      </WithHover>
    </>
  )
}
