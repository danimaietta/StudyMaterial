import React from 'react'

export default function withHoverClassComponent(
  Component,
  propName = 'hovering'
) {
  return class WithHover extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hovering: false
      }
      this.mouseOver = this.mouseOver.bind(this) // you need bind this to the methods
      this.mouseOut = this.mouseOut.bind(this) // so you can use this.setState
    }

    mouseOver() {
      this.setState({ hovering: true })
    }
    mouseOut() {
      this.setState({ hovering: false })
    }

    render() {
      const props = {
        [propName]: this.state.hovering
      }

      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...this.props} {...props} />
          {this.state.hovering && (
            <h4>Message when you hover in {this.props.message}</h4>
          )}
        </div>
      )
    }
  }
}
