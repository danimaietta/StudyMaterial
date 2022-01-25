import React from 'react'
import { useStore, useDispatch } from 'react-redux'

export function StoreChanger() {
  const store = useStore()
  const dispatch = useDispatch()
  const [, updateState] = React.useState()
  const forceUpdate = React.useCallback(() => updateState({}), [])
  return (
    <div>
      <div>
        Direct store access, check2: {store.getState().reducer1.check2.toString()}
      </div>
      <button onClick={() => dispatch({ type: 'CHECK2' })}>CHeck2</button>

      <button onClick={forceUpdate}>Update me</button>
    </div>
  )
}
