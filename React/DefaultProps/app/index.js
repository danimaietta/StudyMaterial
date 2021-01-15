import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ClassComponent from './components/ClassComponent'
import FunctionComponent from './components/FunctionComponent'

function App() { 
  return (
    <>
      <ClassComponent />
      <FunctionComponent />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)