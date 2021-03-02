import React from 'react'

export default class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('About comp', this.props)
    return <h4> About </h4>
  }
}
