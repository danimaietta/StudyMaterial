import React from 'react'
import Son from './Son'

export default function Father() {

  console.count('Father')

  return (
    <>
      <h1> Father </h1>
      <Son />
    </>
  )
}
