import React, { useState, useEffect } from 'react'

export default function Simple({ editPost }) {
  const [number, setNumber] = useState(null)

  useEffect(() => {
    if (editPost === true) {
      import('../logic/logic')
        .then(module => setNumber(module.calculateNumber(2)))
        .catch(e => console.log(e))
    }
  }, [])

  return <h2>The number is {number}</h2>
}
