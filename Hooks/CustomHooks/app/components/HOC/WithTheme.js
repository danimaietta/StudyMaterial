import React from 'react'

export default function WithTheme(Component) {
  return function withTheme(props) {
    return <div className={props.color}>{<Component {...props} />}</div>
  }
}
