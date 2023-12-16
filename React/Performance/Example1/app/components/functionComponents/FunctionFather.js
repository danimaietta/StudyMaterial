import React, { useState, useCallback } from 'react'
import FuncChild1, {a, b} from './FuncChild1'
import FuncChild2 from './FuncChild2'

export default function FunctionFather(){
  
  const [value, setValue] = useState('1st message')
  const [fatherValue, setFatherValue] = useState(true)

  const toggleValue = () => {
    value == '1st message' ? setValue('2nd message') : setValue('1st message')
  }

  return (
    <>
      <h1>My function value is {fatherValue.toString()}</h1>
      <FuncChild1 msg={value} />
      <FuncChild2 msg={value} />
      <button onClick={() => toggleValue()}> Toggle global value </button>
      <button onClick={() => setFatherValue(!fatherValue)}> Toggle father value </button>
    </>
  )  

}