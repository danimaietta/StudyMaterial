import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export function ToDoList() {
  const toDoList = useSelector(state => state.toDoList)
  console.log(toDoList)
  const dispatch = useDispatch()
  const input = useRef('')

  return (
    <div>
      <input ref={input}></input>
      <ul>
        {toDoList.map((item, index) => (
          <li key={index}>
            {item}
            <button
              className='update-btn'
              onClick={() =>
                dispatch({ type: 'UPDATE_ITEM', value: input.current.value, index })
              }
            >
              #
            </button>
            <button
              className='delete-btn'
              onClick={() => dispatch({ type: 'DELETE_ITEM', index })}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: 'ADD_ITEM', value: input.current.value })}>
        +
      </button>
    </div>
  )
}
