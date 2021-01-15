import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ClassComponent from './components/ClassComponent'
import FunctionComponent from './components/FunctionComponent'

function App() { 
  return (
    <>
      <ClassComponent> 
        <h3>I'm the class component children</h3>
      </ClassComponent>
      <br/>
      <FunctionComponent foo={123}> 
        <h3>I'm the function component children</h3>
      </FunctionComponent>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)