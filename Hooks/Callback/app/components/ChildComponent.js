import React, { useEffect } from 'react'

export default function FuncChild1({ sumatoryFunction, text }) {
  useEffect(() => {
    console.count('child component renders')
  }, [sumatoryFunction, text])

  return (
    <h4>
      I'm child component, my sumatory function result is {sumatoryFunction(5)} and my
      text is {text}
    </h4>
  )
}

export const MemoizedFuncChild1 = React.memo(FuncChild1)
