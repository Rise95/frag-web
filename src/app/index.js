import React, { useReducer, useMemo } from 'react'
import Provider from './components/provider'
import Scenes from '../scenes'
import {
    GlobalStyle
} from './style'

export default () => {

    const [state, dispatch] = useReducer((prevState, action) => {
        switch (action.type) {
            default:
                return prevState
        }
    }, {
        accessToken: null,
        expiresIn: null,
        tokenType: null,
        refreshToken: null,
        scope: null,
        clientId: 'mack',
        clientSecret: 'password',
        username: '',
        password: '',
        productData: [],
        notificationData: {
            active: false,
            component: undefined
        },
        shoppingCartData: [],
        categoryData: [],
        categorySelectedId: '',
    });

    const appContext = useMemo(() => ({
        ...state
    }));

    return (
        <>
            <GlobalStyle />
            <Provider value={appContext}>
                <Scenes />
            </Provider>
        </>
    )
}

console.disableYellowBox = true