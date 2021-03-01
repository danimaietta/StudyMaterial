import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log('Home comp', { props })
  }

  render() {
    return <h4> Home </h4>
  }
}
