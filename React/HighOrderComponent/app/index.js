import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import withHoverClassComponent from './components/WithHoverClassComponent'
import withHoverFunctionComponent from './components/WithHoverFunctionComponent'
import Info from './components/Info'
import Calendar from 'react-calendar';

/*
  Calendar will be our third-party component so we can prove
  the inversion of control
*/
function App() {
  const InfoWithHoverClass = withHoverClassComponent(Info)
  const InfoWithHoverFunction = withHoverFunctionComponent(Info)
  const CalendarWithHover = withHoverFunctionComponent(Calendar)

  return (
    <>
      <InfoWithHoverClass message="class component" />
      <InfoWithHoverFunction message="function component" />
      <CalendarWithHover message="third-party calendar component"/>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)