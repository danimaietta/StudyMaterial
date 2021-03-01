import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ClassFather from './components/classComponents/ClassFather'
import FunctionFather from './components/functionComponents/FunctionFather'

function App() {
  return (
    <>
      <ClassFather />
      <hr />
      <FunctionFather />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
