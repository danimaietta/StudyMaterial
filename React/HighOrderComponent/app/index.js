import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import withHoverClassComponent from './components/WithHoverClassComponent'
import withHoverFunctionComponent from './components/WithHoverFunctionComponent'
import Info from './components/Info'

function App() {
  
  const InfoWithHoverClass = withHoverClassComponent(Info)
  const InfoWithHoverFunction = withHoverFunctionComponent(Info)

  return (
    <>
      <InfoWithHoverClass message="class component" />
      <InfoWithHoverFunction message="function component"/>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)