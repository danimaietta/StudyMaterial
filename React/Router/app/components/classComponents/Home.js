import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('Home comp', this.props)
    return <h4> Home </h4>
  }
}
