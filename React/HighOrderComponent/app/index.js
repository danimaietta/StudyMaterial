import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import withHoverClassComponent from './components/WithHoverClassComponent'
import withHoverFunctionComponent from './components/WithHoverFunctionComponent'
import wrap from './components/Wrap'
import Info from './components/Info'
import Calendar from 'react-calendar'
import Add from './components/Add'

/*
  Calendar is to test it with a third party component
*/
function App() {
  const InfoWithHoverClass = withHoverClassComponent(Info)
  const InfoWithHoverFunction = withHoverFunctionComponent(Info)
  const CalendarWithHover = withHoverFunctionComponent(Calendar)
  const WrappedAdd = wrap(Add)

  return (
    <>
      <InfoWithHoverClass message='class component' />
      <InfoWithHoverFunction message='function component' />
      <CalendarWithHover message='third-party calendar component' />
      <WrappedAdd a={1} b={2} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
