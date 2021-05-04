import React, { useState, useEffect } from 'react'

export default function App() {
  const [oneThing, setOneThing] = useState(1)
  const [secondThing, setSecondThing] = useState(2)
  const [thirdThing, setThirdThing] = useState(3)

  const handleOnClick = () => {
    setOneThing(oneThing + 1)
    setSecondThing(secondThing + 1)
    setThirdThing(thirdThing + 1)
  }

  useEffect(() => {}, [])

  console.count('render')

  return (
    <div className='App'>
      <p>
        {oneThing} {secondThing} {thirdThing}
      </p>
      <button onClick={handleOnClick}>Click me</button>
    </div>
  )
}
