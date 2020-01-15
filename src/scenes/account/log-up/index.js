import React, { useContext } from 'react'
import useAxios from 'axios-hooks'
import {
    useHistory,
    useLocation
} from 'react-router-dom'
import {
    AppContext
} from '../../../app/components/context'
import {
    Container
} from './style'
import {
    F, FaFingerprint, FaKey
} from 'react-icons/fa'
export default () => {
    
    const {
        restoreToken
    } = useContext(AppContext)
    const history = useHistory();
    const location = useLocation();
    
    const { from } = location.state || { from: { pathname: "/" } };
    const login = () => {
        restoreToken(() => {
            history.replace(from);
        },{
            accessToken: 'fgfgfg',
            expiresIn: 'hghghgh',
            tokenType: 'hhghgh',
            refreshToken: 'gfhfgfhhg',
            scope:'gfhfhfhfh',
        });
    };
  
    return (
        <Container>
           
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 0.25
                }}
            >
                 <div>
                    <p style={{ color: '#fff', fontSize: 35, letterSpacing: 4 }}> LOG UP </p>
                </div>
                <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: 20
                    }}
                >
                    <div style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
                        <FaFingerprint 
                            size={30}
                            color="#fff"
                        />
                        <input style={{ flex: 1, height: 35, marginLeft: 20, borderRadius: 7 }} />
                    </div>
                    <div style={{ marginTop: 10, display: 'flex',  alignItems: 'center' }}>
                        <FaKey 
                            size={30}
                            color="#fff"
                        />
                        <input style={{ flex: 1, height: 35, marginLeft: 20, borderRadius: 7 }} />
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: 20
                    }}
                >
                    <div style={{ marginTop: 10, display: 'flex' }}>
                        <button style={{ flex: 1, display: 'flex', letterSpacing: '4px', color: '#673AB7', backgroundColor: '#fff', fontWeight: 'bold', justifyContent: 'center', borderRadius: 7, alignItems: 'center', height: 35 }} onClick={() => login()}> CREATE </button>
                    </div>
                </div>
            </div>
        </Container>
    );

}