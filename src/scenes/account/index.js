import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import LogIn from './log-in'
import LogUp from './log-up'

export default () => {
  
    return (
        <Switch>
            <Route path="/account/log-in" component={LogIn} />
            <Route path="/account/log-up" component={LogUp} />
            <Redirect from="/account" to="/account/log-in" />
        </Switch>
    );

}