import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import HelloWorld from './components/HelloWorld'

function App() { 
  return (
    <HelloWorld/>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)