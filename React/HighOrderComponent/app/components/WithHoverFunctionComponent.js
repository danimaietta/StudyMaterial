import React, {useState} from 'react'

export default function withHoverFunctionComponent(Component, propName = 'hovering'){

  return function WithHover(props) {

    const [hovering, setHovering] = useState(false)
    
    const mouseOver = () => setHovering(true)
    const mouseOut = () => setHovering(false)

    return (
        <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <Component hovering={hovering} {...props} />
            {hovering && <h4>Message when you hover in function component</h4>}
        </div>
    )
  }

}
 