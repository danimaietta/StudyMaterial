import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ClassProviderComponent from './components/classComponents/ClassProviderComponent'
import FunctionProviderComponent from './components/functionComponents/FunctionProviderComponent'

/*
  Normally LocaleContext is used in the index, but in order to show both 
  sides of class and function component it is separated
*/

function App() { 
  return (
    <>
      <ClassProviderComponent />
      <FunctionProviderComponent />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)