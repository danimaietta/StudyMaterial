import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Controlled from './components/Controlled'
import Uncontrolled from './components/Uncontrolled'

function App() { 
  return (
    <>
      <Uncontrolled/>
      <Controlled/>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)