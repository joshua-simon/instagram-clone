import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Login from './pages/login'
import SignUp from './pages/signup'

function App() {
  return (
    <Router>
        <Switch>
          <Route path = {ROUTES.LOGIN} component = {Login} />
          <Route path = {ROUTES.SIGN_UP} component = {SignUp} />
        </Switch>
    </Router>
  )
}

export default App;
