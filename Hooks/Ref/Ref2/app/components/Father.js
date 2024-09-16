import React, { useState, useEffect } from 'react'
import Son from './Son'

export default function Father() {
  const [renders, setRenders] = useState(0)

  const incrementRenders = () => {
    setRenders(renders + 1)
    console.log('Father', renders)
  }

  return (
    <>
      <h1> Father </h1>
      <Son />
      <button onClick={incrementRenders}> </button>
    </>
  )
}
