import React, { useState, useCallback } from 'react'
import MemoizedFuncChild1 from './ChildComponent'

export default function MainComponent() {
  const [number, setNumber] = useState(1)
  const [text, setText] = useState('default text')
  const [booleanValue, setBooleanValue] = useState(true)

  // try erasing the useCallback to see what happens
  const sumatoryFunction = useCallback(num => num + parseInt(number), [number])

  console.count('main component renders')
  return (
    <>
      <h1>The number is {number}</h1>
      Number: <input type='number' onChange={e => setNumber(e.target.value)} />
      <br />
      Text: <input onChange={e => setText(e.target.value)} />
      <h4>My boolean value is {booleanValue.toString()}</h4>
      <button onClick={() => setBooleanValue(!booleanValue)}> toggle boolean </button>
      <MemoizedFuncChild1 sumatoryFunction={sumatoryFunction} text={text} />
    </>
  )
}
