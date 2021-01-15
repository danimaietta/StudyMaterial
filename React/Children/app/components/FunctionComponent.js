import React from 'react'

export default function FunctionComponent({children, foo}){
    return (
        <>
            <h2>I'm a function component father</h2>
            {children}
            <h3>Im the prop foo {foo}</h3>
        </>
    )
}
