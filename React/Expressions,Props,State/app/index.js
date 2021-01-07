import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ClassComponent from './components/ClassComponent'
import FunctionComponent from './components/FunctionComponent'

function App() {
  
  const sayHi = (message) => {
    alert(`Hello World ${message}`)
  }

  return (
    <>
      <ClassComponent 
        name='daniel'
        age={25}
        sayHi={sayHi}
      />
      <FunctionComponent 
        name='daniel'
        age={25}
        sayHi={sayHi}
      />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)