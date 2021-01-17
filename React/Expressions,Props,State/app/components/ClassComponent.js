import React from 'react'

export default class ClassComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = { displayMessage: 'Class Component'}
  }

  changeMessage = () => this.setState({displayMessage: 'Class Component Changed'}, () => {
    console.log('indeed it changed')
  })

  addMessage = (message) => this.setState({ displayMessage: this.state.displayMessage.concat(message) })

  render() {
    return (
      <>
          <h1> Class Component </h1>
          <p> My name is {this.props.name} </p>
          <p> My age is {this.props.age} </p>
          <button onClick={() => this.props.sayHi(this.state.displayMessage)}> Say Hi </button>
          <button onClick={this.changeMessage}> Change Message </button>
          <button onClick={() => this.addMessage(' new message')}> Add Message to the State </button>
      </>
    ) 
  }
}