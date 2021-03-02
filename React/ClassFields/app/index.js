import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './components/ClassFieldComp'
import ClassFieldComp from './components/ClassFieldComp'
import NormieClassComp from './components/NormieClassComp'

function App() {
  return (
    <>
      <ClassFieldComp />
      <br />
      <NormieClassComp />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
