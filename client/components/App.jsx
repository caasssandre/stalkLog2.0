import React from 'react'
import Register from './Register'
import Login from './Login'
import Nav from './Nav'

import {HashRouter as Router, Route, Link} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Nav/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
    </Router>
  )
}

export default App
