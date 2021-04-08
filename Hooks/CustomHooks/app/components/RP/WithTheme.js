import React from 'react'

export default function WithTheme(props) {
  return <div className={props.color}>{props.children()}</div>
}
