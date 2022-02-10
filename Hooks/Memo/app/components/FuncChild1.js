import React, { useEffect } from 'react'

export default function FuncChild1({ sumatory }) {
  useEffect(() => {
    console.count('function children renders')
  }, [sumatory])

  return <h4>I'm function child 1 and my sumatory is {sumatory(5)}</h4>
}

export const MemoizedFuncChild1 = React.memo(FuncChild1)
