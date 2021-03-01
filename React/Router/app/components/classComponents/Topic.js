import React from 'react'

export default class Topic extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <h4> {this.props.match.params.topicId} </h4>
  }
}
