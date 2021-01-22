import React from 'react'

export default class WithHoverClassComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hovering: false
    }
    this.mouseOver = this.mouseOver.bind(this) // you need bind this to the methods
    this.mouseOut = this.mouseOut.bind(this)   // so you can use this.setState
  }
  
  mouseOver() {
    this.setState({hovering: true})
  }
  mouseOut() {
    this.setState({hovering: false})
  }
  
  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.children(this.state.hovering)}
        {this.state.hovering && <h4>Message when you hover in {this.props.message}</h4>}
      </div>
    )
  }

}
 