import React, { useState, useMemo } from 'react'
import slowFunction from '../logic/logic'

export default function MainComponent() {
  const [number, setNumber] = useState(1)
  const [booleanValue, setBooleanValue] = useState(true)

  // try erasing useMemo
  const result = useMemo(() => slowFunction(number), [number])

  console.count('main component renders')
  return (
    <>
      <h1>
        The number is {number} and the result of the slow function is {result}
      </h1>
      <h4>My boolean value is {booleanValue.toString()}</h4>
      <input type='number' onChange={e => setNumber(e.target.value)} />
      <button onClick={() => setBooleanValue(!booleanValue)}> toggle boolean </button>
    </>
  )
}
