import React from 'react'

export default function HelloWorld(){
    const element = React.createElement(
        'h1',
        {id: 'hello', onClick: sayHello},
        'Hello World'
    )
    
    function sayHello(){
        console.log('Hello World')
    }

    return element  
}
