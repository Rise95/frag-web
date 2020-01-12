import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Products from './products'

export default () => {
    return (
        <Switch>
            <Route 
                path="/home/products"
                component={Products}
            />
            <Redirect  
                from="/home"
                to="/home/products"
            />
        </Switch>
    )
}