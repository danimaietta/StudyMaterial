import React from "react";

function Greeting(){

    let [message, setMessage] = React.useState('Hello World!')
    const sayHello = () => setMessage('Hello World! x2')

    return (
        <div>
            <button onClick={sayHello}>Say hello world</button>
            <h1>{message}</h1>
        </div>
    )
}

export default Greeting;