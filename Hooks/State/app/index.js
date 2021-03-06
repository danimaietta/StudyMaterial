import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Theme from './components/Theme'
import BadCounter from './components/BadCounter'
import GoodCounter from './components/GoodCounter'
import ListOfThings from './components/ListOfThings'
import Contact from './components/Contact'
import MultipleSets from './components/MultipleSets'

function App() {
  return (
    <>
      <h1>Normal Values: </h1>
      <Theme />
      <h1>Methods: </h1>
      <BadCounter />
      <GoodCounter />
      <h1>Array:</h1>
      <ListOfThings />
      <h1>Object:</h1>
      <Contact />
      <h1>Multiple sets</h1>
      <MultipleSets />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
