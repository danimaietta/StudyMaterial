import React, { useState } from 'react'

export default function FunctionComponent({name, age, sayHi}){
    const [displayMessage, setDisplayMessage] = useState('Function Component')

    return (
        <>
            <h1> Function Component </h1>
            <p> My name is {name} </p>
            <p> My age is {age} </p>
            <button onClick={() => sayHi(displayMessage)}> Say Hi </button>
            <button onClick={() => setDisplayMessage('Function Component Changed')}> Change Message </button>
        </>
    )
}

/*
    For Function Components there is no state that can be handled without using hooks
    Hooks is an advanced subject but in this case we give a brieve example of it
*/
