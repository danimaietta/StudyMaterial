import React, { useState, useRef } from "react"

export default function Email() {
  const [renderMe, setRenderMe] = useState(false)
  const input = useRef("")
  let normalVariable = 0

  function handleSubmit() {
    normalVariable = normalVariable + 1
    console.log("The email is " + input.current.value)
    console.log("The normalVariable is " + normalVariable)
  }

  return (
    <>
      <h4>Input Value: {input.current.value}</h4>
      <input ref={input} type='text' />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => setRenderMe(!renderMe)}>Render</button>
    </>
  )
}
