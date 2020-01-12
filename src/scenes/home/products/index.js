import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Checkout from './checkout'
import List from './list'
import NavBar from './components/navBar'
import {
    Container
} from './style'

export default () => {
    return (
        <Container>
            <NavBar />
            <Switch>
                <Route 
                    path="/home/products/list"
                    component={List}
                />
                <Route 
                    path="/home/products/checkout"
                    component={Checkout}
                />
                <Redirect  
                    from="/home/products"
                    to="/home/products/list"
                />
            </Switch>
        </Container>
    )
}