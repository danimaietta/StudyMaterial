import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Example from './components/Example'
import Counter from './components/Counter'
import Posts from './components/Posts'

function App() {
  return (
    <>
      {/*<Example />*/}
      <Counter />
      <Posts />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
