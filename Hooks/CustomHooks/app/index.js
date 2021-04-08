import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import RP from './components/RP/RP' // RP: Render Props
import HOC from './components/HOC/HOC' // HOC: High Order Component
import CustomHook from './components/CustomHooks/CustomHook'

function App() {
  return (
    <>
      <h1>Render Props</h1>
      <RP />
      <br />
      <h1>High Order Components</h1>
      <HOC />
      <br />
      <h1>Custom Hooks</h1>
      <CustomHook />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
