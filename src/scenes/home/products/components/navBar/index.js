import React, { useContext } from 'react'
import {
    Container,
    LogoImage
} from './style'
import { AppContext } from '../../../../../app/components/context'
import {
    useHistory
} from 'react-router-dom'
import ShoppingCart from './components/shoppingCart'
import Arrow from './components/arrow'

export default () => {

    const {
        shoppingCartData
    } = useContext(AppContext)

    const history = useHistory()

    return (
        <Container>

            <Arrow
                history={history}
            />

            <LogoImage
                src={require('../../../../../assets/logo-mark/logo-32.png')}
            />

            <ShoppingCart
                history={history}
                shoppingCartLength={shoppingCartData.length}
            />

        </Container>
    )
}