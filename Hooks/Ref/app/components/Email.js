import React, { useState, useRef } from 'react'

export default function Email() {
  const [renderMe, setRenderMe] = useState(false)
  const input = useRef('')

  function handleSubmit() {
    console.log('The email is ' + input.current.value)
  }

  console.count('Email rendered')

  return (
    <>
      <h4>{input.current.value}</h4>
      <input ref={input} type='text' />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => setRenderMe(!renderMe)}>Render</button>
    </>
  )
}
