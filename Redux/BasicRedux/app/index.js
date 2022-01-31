import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Counter from './components/Counter'
import Login from './components/Login'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers' // this search index by default
import { ToDoList } from './components/ToDoList'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  return (
    <>
      <ToDoList />
      <Counter />
      <Login />
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
