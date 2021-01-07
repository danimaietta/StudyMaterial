import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import User from './components/User'
import Admin from './classes/Admin'

/*
  Try not sending a prop name
  Try not sending a string by prop
*/

const boss = new Admin('realBoss', 54)
const fakeBoss = {name: 'fakeBoss', age: 54}
const employe = {name: 'realEmploye', age: 22}

function App() { 
  return (
    <User 
      name={'daniel'} // try sending a boolean
      age={25} // try sending a string
      parent={false} 
      admin={boss} // try sending fake boss
      scores={[93, 80, 87, 91, 76]} // try changing a number to string
      employe={employe} // try changing a property in the object employe
    />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)