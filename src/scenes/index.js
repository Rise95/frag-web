import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './home'

export default () => {
  return (
    <>
      <div>

      </div>
      <BrowserRouter>
        <Switch>
          <Route 
            path="/home"
            component={Home}
          />
          <Redirect  
            from="/"
            to="/home"
          />
        </Switch>
      </BrowserRouter>
    </>
  )
}