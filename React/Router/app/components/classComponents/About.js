import React from 'react'

export default class About extends React.Component {
  constructor(props) {
    super(props)
    console.log('About comp', { props })
  }

  render() {
    return <h4> About </h4>
  }
}
