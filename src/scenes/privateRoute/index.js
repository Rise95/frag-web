import React, { useContext, useEffect }  from 'react'
import { AppContext } from '../../app/components/context'
import useAxios from 'axios-hooks'
import querystring from 'querystring'
import {
    Route,
    Redirect
} from 'react-router-dom'
import {
    Container
} from './style'
import Loading from '../../components/loading'

export default ({ children, ...rest }) => {

    const {
        accessToken,
        refreshToken,
        restoreToken
    } = useContext(AppContext)

    const [{ data, loading, error }, executeRestoreToken] = useAxios({
        url: "/oauth/token",
        method: 'POST',
        data: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        }),
        headers: {
            Authorization: 'Basic YXBwbGljYXRpb246c2VjcmV0',
	        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    const executeRestoreTokenCallback = async () => {
        await executeRestoreToken()
        console.log(error)
        console.log(data)
        console.log(loading)
    }

    useEffect(() => {

        restoreToken(() => executeRestoreTokenCallback(), null)    

    }, [])

    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (loading) {
                    return (
                        <Container>
                            <Loading type={0} />
                        </Container>
                    )
                } else if (!loading && accessToken) {
                    return children
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/account",
                                state: { from: location }
                            }}
                        />
                    )
                }
            }}
        />
    );
}