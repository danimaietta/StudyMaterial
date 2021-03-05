import React from 'react'

export default class ClassComponent extends React.Component {
  render() {
    return <h1>I'm a class component {this.props.foo}</h1>
  }
}

ClassComponent.defaultProps = {
  foo: 456
}
