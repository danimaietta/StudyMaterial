import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import WithHoverClassComponent from './components/WithHoverClassComponent'
import WithHoverFunctionComponent from './components/WithHoverFunctionComponent'
import Info from './components/Info'
import Calendar from 'react-calendar';

/*
  Calendar is to test it with a third party component
*/
function App() {
  return (
    <>
      <WithHoverClassComponent message="class component">
        {(hovering) => <Info hovering={hovering} message="class" />}
      </WithHoverClassComponent>
      <WithHoverFunctionComponent message="function component">
        {(hovering) => <Info hovering={hovering} message="function" />}
      </WithHoverFunctionComponent>
      <WithHoverFunctionComponent message="third-party calendar component">
        {(hovering) => <Calendar hovering={hovering} />}
      </WithHoverFunctionComponent>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)