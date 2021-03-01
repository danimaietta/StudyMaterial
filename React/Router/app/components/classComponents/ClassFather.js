import React from 'react'
import Home from './Home'
import About from './About'
import Topics from './Topics'
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default class ClassFather extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li>
          <Link to='/about'> About </Link>
        </li>
        <li>
          <Link to='/topics'> Topics </Link>
        </li>

        {/* if you don't specify the path the component it'll always going to be rendered*/}
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/topics' component={Topics} />
      </BrowserRouter>
    )
  }
}
