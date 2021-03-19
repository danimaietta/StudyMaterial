import React from 'react'

export default function GoodCounter() {
  const getExpensiveCount = () => {
    console.count('GoodCounter getExpensiveCount calls')
    return 999
  }

  // This is going to call getExpensiveCount once
  const [count, setCount] = React.useState(() => getExpensiveCount())

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  console.count('Good Counter renders')

  return (
    <>
      <h3>Good Counter</h3>
      <button onClick={decrement}>-</button>
      <h3>{count}</h3>
      <button onClick={increment}>+</button>
    </>
  )
}
