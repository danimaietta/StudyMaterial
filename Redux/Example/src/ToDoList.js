import React from 'react'
import { useStore, useDispatch } from 'react-redux'

export function ToDoList() {
  const store = useStore()
  const dispatch = useDispatch()

  console.log(store.getState().toDoListReducer)

  return (
    <div>
      <ul>
        {store.getState().toDoListReducer.map((item, index) => (
          <li key={index}>
            {item}
            <button
              className='add-btn'
              onClick={() => dispatch({ type: 'ADD_ITEM', value: 'hello world' })}
            >
              +
            </button>
            <button className='update-btn'>#</button>
            <button className='delete-btn'>-</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
