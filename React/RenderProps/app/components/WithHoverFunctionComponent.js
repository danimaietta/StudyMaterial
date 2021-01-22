import React, {useState} from 'react'

export default function WithHoverFunctionComponent(props){

    const [hovering, setHovering] = useState(false)
    
    const mouseOver = () => setHovering(true)
    const mouseOut = () => setHovering(false)

    return (
        <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
            {props.children(hovering)}
            {hovering && <h4>Message when you hover in {props.message}</h4>}
        </div>
    )

}
 