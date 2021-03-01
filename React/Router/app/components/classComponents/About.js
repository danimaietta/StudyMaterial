import React from 'react'

export default class About extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.match)
  }

  render() {
    return <h4> About </h4>
  }
}
