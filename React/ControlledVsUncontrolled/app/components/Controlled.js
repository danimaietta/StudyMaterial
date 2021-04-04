import React, { useState } from 'react'

export default function Controlled() {
  const [email, setEmail] = useState('')

  function handleChange(e) {
    setEmail(e.target.value)
  }
  function handleSubmit() {
    console.log('The email is ' + email)
  }

  console.count('Controlled rendered')

  return (
    <div>
      <h2>Controlled</h2>
      <h4>
        Works rendering this component only, leaving other components intact
      </h4>
      <pre>The email is {email}</pre>
      <br />
      <input
        type='text'
        placeholder='Email'
        value={email}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
