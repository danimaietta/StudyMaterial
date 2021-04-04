import React from 'react'

export default function Uncontrolled() {
  const input = React.createRef('')

  function handleSubmit() {
    console.log('The email is ' + input.current.value)
  }

  console.count('Uncontrolled rendered')

  return (
    <div>
      <h2>{input.current.value}</h2>
      <h4>It works, but it render the whole DOM</h4>
      <input type='text' placeholder='Email' ref={input} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
