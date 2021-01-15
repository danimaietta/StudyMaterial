import React from 'react'

export default class ClassComponent extends React.Component {
  render() {
    return (
      <>
        <h2>I'm a class component</h2>  
        {this.props.children}
      </>
    )
  }
}