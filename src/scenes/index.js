import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './home'
import Account from './account'
import PrivateRoute from './privateRoute'

export default () => {
  return (
    <>
      <div>

      </div>
      <BrowserRouter>
        <Switch>
          <Route 
            path="/account"
            component={Account}
          />
          <PrivateRoute 
            path="/home"
          >
            <Home />
          </PrivateRoute>
          <Redirect  
            from="/"
            to="/home"
          />
        </Switch>
      </BrowserRouter>
    </>
  )
}