import React from 'react'
import Topic from './Topic'
import { Route, Link } from 'react-router-dom'

export default function Topics(props) {
  console.log('Topics func', { props })

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${props.match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/props-v-state`}>Props vs State</Link>
        </li>
      </ul>

      <button onClick={() => props.history.goBack()}>go back</button>
      <button onClick={() => props.history.go(-2)}>go</button>
      <button onClick={() => props.history.goForward(2)}>go forward</button>
      <button
        onClick={() =>
          props.history.push(
            `${props.match.url}/rendering?name=dani&lastName=maietta`
          )
        }
      >
        push to rendering
      </button>
      <button
        onClick={() => props.history.replace(`${props.match.url}/rendering`)}
      >
        replace to rendering
      </button>

      <Route path={`${props.match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={props.match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
}
