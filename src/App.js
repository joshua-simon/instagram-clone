import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Login from './pages/login'
import SignUp from './pages/signup'
import NotFound from './pages/not-found'
import Dashboard from './pages/dashboard'
import useAuthListener from './hooks/use-auth-listener'
import UserContext from './context/user'
import ProtectedRoute from './helpers/protected-route'
import IsUserLoggedIn from './helpers/is-user-logged-in'
import Profile from './pages/profile'

function App() {
  const { user } = useAuthListener()
  return (
  <UserContext.Provider value = {{user}}>
    <Router>
        <Switch>
          <IsUserLoggedIn user = {user} loggedInPath={ROUTES.DASHBOARD} path = {ROUTES.LOGIN}>
            <Login/>
          </IsUserLoggedIn>
          <IsUserLoggedIn user = {user} loggedInPath={ROUTES.DASHBOARD} path = {ROUTES.SIGN_UP}>
            <SignUp/>
          </IsUserLoggedIn>
          <Route path = {ROUTES.PROFILE} component = {Profile}/>
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
