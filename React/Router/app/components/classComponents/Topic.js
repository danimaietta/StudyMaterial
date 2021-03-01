import React from 'react'
const queryString = require('query-string')

export default class Topic extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Topic comp', { prevProps })
    const values = queryString.parse(prevProps.location.search)
    const { name, lastName } = values
    console.log(name, lastName)
  }

  render() {
    return <h4> {this.props.match.params.topicId} </h4>
  }
}
