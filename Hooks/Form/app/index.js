import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import './index.css'

function App() {
  return (
    <>
      <h1>useForm example</h1>
      <Form />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
