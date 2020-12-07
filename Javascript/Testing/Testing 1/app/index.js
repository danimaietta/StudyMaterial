import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Greeting from './components/Greeting'

function App() {
  
  return (
      <Greeting />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)