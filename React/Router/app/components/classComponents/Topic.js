import React from 'react'
const queryString = require('query-string')

export default class Topic extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('Topic comp', this.props)
    const values = queryString.parse(this.props.location.search)
    const { name, lastName } = values
    console.log(name, lastName)
    return <h4> {this.props.match.params.topicId} </h4>
  }
}
