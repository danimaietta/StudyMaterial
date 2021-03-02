import React from 'react'

export default class NormieClassComp extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'dani'
    }
    this.changeName = this.changeName.bind(this)
  }

  changeName() {
    this.setState({ name: 'pablo' })
  }

  render() {
    return (
      <>
        <h1>normie class state value is: {this.state.name}</h1>
        <button onClick={() => this.changeName()}>change name to pablo</button>
      </>
    )
  }
}

/*

    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));

*/
