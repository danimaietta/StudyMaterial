import React, { useState } from 'react'

export default function WithHover(props) {
  const [hovering, setHovering] = useState(false)

  const mouseOver = () => setHovering(true)
  const mouseOut = () => setHovering(false)

  return (
    <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
      {props.children()}
      {hovering && <h5>Message when you hover {props.message}</h5>}
    </div>
  )
}
