import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Simple from './components/Simple'
import LazySuspense from './components/LazySuspense'

function App() {
  return (
    <>
      <Simple editPost={true} />
      <LazySuspense />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
