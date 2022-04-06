import React, { useState, useRef } from "react"

export default function InputButton() {
  const [value, setValue] = useState("hi")
  const inputRef = useRef("")
  return (
    <div>
      <h1>{value}</h1>
      <input ref={inputRef} />
      <button onClick={() => setValue(inputRef.current.value)}>Press me</button>
    </div>
  )
}
