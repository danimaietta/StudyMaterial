import React from 'react'
import WithHover from './WithHover'
import WithTheme from './WithTheme'
import WithAuth from './WithAuth'
import Info from '../Info'

/*
  Enhanced Components:  InfoWithHover, InfoWithHoverTheme, InfoWithHoverThemeAuth 
  HOC:                  WithHover, WithTheme, WithAuth
*/
export default function HOC() {
  const InfoWithHover = WithHover(Info)
  const InfoWithHoverTheme = WithTheme(InfoWithHover)
  const InfoWithHoverThemeAuth = WithAuth(InfoWithHoverTheme)

  return (
    <>
      <InfoWithHoverThemeAuth
        code={1234}
        color={'blue'}
        message='hello world'
      />
    </>
  )
}
