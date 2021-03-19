import React from 'react'

export default function BadCounter() {
  const getExpensiveCount = () => {
    console.count('BadCounter getExpensiveCount calls')
    return 999
  }

  // This is going to call getExpensiveCount everytime BadCounter renders
  const [count, setCount] = React.useState(getExpensiveCount())

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  console.count('Bad Counter renders')

  return (
    <>
      <h3>Bad Counter</h3>
      <button onClick={decrement}>-</button>
      <h3>{count}</h3>
      <button onClick={increment}>+</button>
    </>
  )
}
