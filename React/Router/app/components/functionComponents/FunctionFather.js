import React from 'react'
import Home from './Home'
import About from './About'
import Topics from './Topics'
import NoMatch from './NoMatch'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

export default function FunctionFather() {
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

      {/* if you don't specify the path, the component will always going to be rendered */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/topics' component={Topics} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  )
}

/*
  if exact is not specified, if other paths are similar it will render both components, exact prevents that
*/
