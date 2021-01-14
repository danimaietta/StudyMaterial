import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Lifecycle from './components/Lifecycle'
import HelloWorld from './components/HelloWorld'

function App() { 

  let [life, setLife] = useState(true)
  let [num, setNum] = useState(123)

  return (
    <>
      {
        life ?
          <Lifecycle foo={num}/>
        :
          <HelloWorld />
      }
      <br/>
      <button onClick={() => setLife(!life)}>Toggle Components</button>
      <br/>
      <button onClick={() => setNum(456)}>Send Different Props to Lifecycle Component</button>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)