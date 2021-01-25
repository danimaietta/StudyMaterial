import React, { useState, useMemo, useCallback } from 'react'
import slowFunction from '../../logic/logic'
import { MemoizedFuncChild1 } from './FuncChild1'

export default function FunctionFather(){
  
  const [number, setNumber] = useState(1)
  const [other, setOther] = useState(true)

  const result = useMemo(() => slowFunction(number), [number])

  const sumatory = useCallback(num => num + parseInt(number), [number])

  console.count('function father renders')
  return (
    <>
      <h1>My function number is {number} and the result is {result}</h1>
      <h4>My function other value is {other.toString()}</h4>
      <input type="number" onChange={e => setNumber(e.target.value)}></input>
      <button onClick={() => setOther(!other)}> update other </button>
      <MemoizedFuncChild1 sumatory={sumatory} />
    </>
  )  

}

/*
 useMemo only when you use useEffect that contains an object/array in the second parameter
 or if you have a function that takes too long running
*/

/*
 useCallback only when you use useEffect or useMemo that contains 
 a function in the second parameter
*/