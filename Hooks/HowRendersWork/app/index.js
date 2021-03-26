import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import GoodPost from './components/GoodPost'
import BadPost from './components/BadPost'

function App() {
  return (
    <>
      <h1>Good Post </h1>
      <GoodPost />
      <br />
      <h1>Bad Post </h1>
      <BadPost />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
