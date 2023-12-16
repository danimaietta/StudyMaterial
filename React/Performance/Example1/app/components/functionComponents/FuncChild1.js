import React, { memo } from 'react'

/*
  React.memo works for class and function components
*/
function FuncChild1(props) {
  console.count('function children1 renders')
  return <h4>I'm function child 1 and this is my {props.msg}</h4>
}

export default memo(FuncChild1)



/*
  this is what React.memo does under the hood
  React.memo(FuncChild1, [areEqual(prevProps, nextProps)]);
*/