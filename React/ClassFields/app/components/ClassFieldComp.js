import React from 'react'

export default class ClassFieldComp extends React.Component {
  state = {
    name: 'dani'
  }

  changeName = () => {
    this.setState({ name: 'pablo' })
  }

  render() {
    return (
      <>
        <h1>class field state value is: {this.state.name}</h1>
        <button onClick={() => this.changeName()}>change name to pablo</button>
      </>
    )
  }
}
