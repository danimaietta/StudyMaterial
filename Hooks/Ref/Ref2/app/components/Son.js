import React, { useRef } from 'react'

export default function Son() {
  const input = useRef()
  const form = useRef()

  console.count('Son')

  const showInput = () => console.log(input.current)

  const showForm = () => console.log(form.current)

  console.log(form.current)
  

  return (
    <form ref={form}>
      <h3> Son </h3>
      <input ref={input} onChange={showInput} />
      <button onClick={showForm}> Show Form </button>
    </form>
  )
}
