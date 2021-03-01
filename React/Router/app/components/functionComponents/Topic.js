import React from 'react'
const queryString = require('query-string')

export default function Topic(props) {
  console.log('Topic', { props })
  const values = queryString.parse(props.location.search)
  const { name, lastName } = values
  console.log(name, lastName)

  return <h4> {props.match.params.topicId} </h4>
}
