import React, { useReducer, useMemo } from 'react'
import Provider from './components/provider'
import Scenes from '../scenes'
import {
    GlobalStyle
} from './style'

export default () => {

    const [state, dispatch] = useReducer((prevState, action) => {
        switch (action.type) {
            case 'RESTORE_TOKEN':
                return { 
                    ...prevState, 
                    accessToken: action.accessToken,
                    expiresIn: action.expiresIn,
                    tokenType: action.tokenType,
                    refreshToken: action.refreshToken,
                    scope: action.scope, 
                }
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
        restoreToken: async (cb, data) => {

            try {

                if (data) {
                
                    await localStorage.setItem('accessToken', data.access_token)
                    await localStorage.setItem('expiresIn', data.expires_in)
                    await localStorage.setItem('tokenType', data.token_type)
                    await localStorage.setItem('refreshToken', data.refresh_token)
                    await localStorage.setItem('scope', data.scope)    

                    dispatch({
                        type: 'RESTORE_TOKEN',
                        accessToken: data.access_token,
                        expiresIn: data.expires_in,
                        tokenType: data.token_type,
                        refreshToken: data.refresh_token,
                        scope: data.scope,
                    })
                   
                }

                cb()

            } catch (e) {
                console.log(e)
            }
           
        },
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