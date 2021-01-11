import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Lifecycle from './components/Lifecycle'

function App() { 
  return (
    <Lifecycle/>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)