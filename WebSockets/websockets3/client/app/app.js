import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'
import './index.css'

const socket = io.connect("http://localhost:3001")

function App() {

  const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState('')

  const sendMessage = () => {
    socket.emit("send_message", { message })
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message)
    })
  }, [socket])
  
  return (
    <>
      <input 
        placeholder='...message'
        onChange={event => setMessage(event.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message: </h1>
      {messageReceived}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
