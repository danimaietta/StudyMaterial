import React, { useState, useEffect } from 'react'

export default function Example() {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)

  const plusOne = () => {
    setNum(num + 1)
    setNum2(num2 + 1)
  }

  useEffect(() => {
    console.count('renders')
  }, [num, num2])

  return (
    <>
      <h2>
        number = {num} and {num2}
      </h2>
      <button onClick={() => plusOne()}>+ 1</button>
    </>
  )
}
