import React from 'react'

export default function Uncontrolled(){

    const input = React.createRef('')
    
    function handleSubmit(){
        alert('The email is ' + input.current.value)
    }

    return (
        <div>
            <h2>Uncontrolled</h2>
            <h4>It works, but it render the whole DOM</h4>
            <input
                type='text'
                placeholder='Email'
                ref={input}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
