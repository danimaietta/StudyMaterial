import React from 'react'
import PropTypes from 'prop-types'
import Admin from '../classes/Admin'

export default class UserCC extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <h2>Hello World {this.props.name}</h2>
        <h2>My age is {this.props.age}</h2>
        <h2>I {this.props.parent ? 'have children' : "don't have children"}</h2>
        <h2>My boss is {this.props.admin.name}</h2>
        <h2>
          My scores are{' '}
          {this.props.scores.map(
            (score, i) =>
              score + (this.props.scores.length - 1 != i ? ', ' : '')
          )}
        </h2>
        <h2>My employe is {this.props.employe.name}</h2>
      </>
    )
  }
}

UserCC.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  parent: PropTypes.bool,
  admin: PropTypes.instanceOf(Admin),
  scores: PropTypes.arrayOf(PropTypes.number),
  employe: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  }).isRequired
}
