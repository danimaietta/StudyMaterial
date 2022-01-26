import React, { useState, useCallback, useRef } from 'react'
import { useStore, useDispatch } from 'react-redux'

export function ToDoList() {
  const store = useStore()
  const dispatch = useDispatch()
  const input = useRef('')
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])

  return (
    <div>
      <input ref={input}></input>
      <ul>
        {store.getState().toDoListReducer.map((item, index) => (
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
      <button onClick={forceUpdate}>Update me</button>
    </div>
  )
}
