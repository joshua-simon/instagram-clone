import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Login from './pages/login'
import SignUp from './pages/signup'
import NotFound from './pages/not-found'
import Dashboard from './pages/dashboard'
import useAuthListener from './hooks/use-auth-listener'
import UserContext from './context/user'
import ProtectedRoute from './helpers/protected.route'


function App() {
  const { user } = useAuthListener()
  return (
  <UserContext.Provider value = {{user}}>
    <Router>
        <Switch>
          <Route path = {ROUTES.LOGIN} component = {Login} />
          <Route path = {ROUTES.SIGN_UP} component = {SignUp} />
          <ProtectedRoute user = {user} path = {ROUTES.DASHBOARD} exact>
            <Dashboard/>
          </ProtectedRoute>
          <Route  component = {NotFound} />
        </Switch>
    </Router>
  </UserContext.Provider>
  )
}

export default App;
