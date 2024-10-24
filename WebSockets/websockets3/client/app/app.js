import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'
import './index.css'

const socket = io.connect("http://localhost:3001")

function App() {
  const [room, setRoom] = useState("")
  const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState('')

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room })
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message)
    })
  }, [socket])
  
  return (
    <>
      <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}> Join Room</button>
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
