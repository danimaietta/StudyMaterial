import React, { useRef } from 'react'

export default function Son() {
  const input = useRef()

  console.count('Son')

  const showInput = () => {
    console.log(input.current)
  }

  return (
    <>
      <h3> Son </h3>
      <input ref={input} onChange={showInput}/>
    </>
  )
}
