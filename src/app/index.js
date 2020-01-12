import React, { useReducer, useMemo } from 'react'
import Provider from './components/provider'
import Scenes from '../scenes'

export default () => {

    const [state, dispatch] = useReducer((prevState, action) => {
        switch (action.type) {
            default:
                return prevState
        }
    }, {
        isLoading: true,
        userToken: null,
        username: '',
        password: '',
        notificationBottom: null,
        users: [],
        profile: null,
        tasks: []
    });

    const appContext = useMemo(() => ({
        ...state
    }));

    return (
        <Provider value={appContext}>
            <Scenes />
        </Provider>
    )
}

console.disableYellowBox = true