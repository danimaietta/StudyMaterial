import React from 'react'

export default function FuncChild2(props) {

  console.count('function children2 renders')
  return <h4>I'm function child 2 and this is my {props.msg}</h4>

}