import React from 'react'

// Im the evil component slowing the app >:)
export default function Component2() {
  let num
  function slowFunction() {
    for (let i = 0; i <= 1000000000; i++) {
      num = i
    }
  }

  slowFunction()

  return (
    <>
      <h3>Component 2</h3>
    </>
  )
}
