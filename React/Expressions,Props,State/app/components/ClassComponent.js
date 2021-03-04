import React from 'react'

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { displayMessage: 'Class Component', counter: 0 }
    this.changeMessage = this.changeMessage.bind(this)
    this.addMessage = this.addMessage.bind(this)
    this.addCounter = this.addCounter.bind(this)
  }

  changeMessage() {
    this.setState({ displayMessage: 'Class Component Changed' }, () =>
      console.log('say Hi again')
    )
  }

  addMessage(message) {
    this.setState({ displayMessage: this.state.displayMessage.concat(message) })
  }

  addCounter(num) {
    this.setState(prevState => ({
      counter: prevState.counter + num
    }))
  }

  render() {
    return (
      <>
        <h1> Class Component </h1>
        <p> My name is {this.props.name} </p>
        <p> My age is {this.props.age} </p>
        <p> My counter is {this.state.counter}</p>
        <button onClick={() => this.props.sayHi(this.state.displayMessage)}>
          Say Hi
        </button>
        <button onClick={this.changeMessage}> Change Message </button>
        <button onClick={() => this.addMessage(' new message')}>
          Add Message to the State
        </button>
        <button onClick={() => this.addCounter(1)}>Add 1</button>
      </>
    )
  }
}
