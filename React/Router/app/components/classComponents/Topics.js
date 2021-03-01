import React from 'react'
import Topic from './Topic'
import { Route, Link } from 'react-router-dom'

export default class Topics extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              Props vs State
            </Link>
          </li>
        </ul>

        <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
        <Route
          exact
          path={this.props.match.url}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    )
  }
}
