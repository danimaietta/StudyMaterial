import React, { useState, useEffect } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.count('In useEffect, after render')
  }, [])

  return (
    <>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}
