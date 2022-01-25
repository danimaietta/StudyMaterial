import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store'
import { Provider } from 'react-redux'
import { ToDoList } from './ToDoList'
import './styles.css'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>To Do List</h1>
        <ToDoList />
      </div>
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
