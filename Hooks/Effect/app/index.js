import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Example from './components/Example'
import Posts from './components/Posts'
import FriendStatus from './components/FriendStatus'
import Scroll from './components/Scroll'

function App() {
  const [status, setStatus] = useState(true)

  return (
    <>
      <h1>Basic Example</h1>
      <Example />
      <h1>Post Example</h1>
      <Posts />
      <br />
      <h1>Friend Status</h1>
      {status ? <FriendStatus friend={{ id: 1 }} /> : <FriendStatus friend={{ id: 2 }} />}
      <br />
      <button onClick={() => setStatus(!status)}>change friend</button>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
