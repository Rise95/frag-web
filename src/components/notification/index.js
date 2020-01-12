import React, { useContext } from 'react'
import { AppContext } from '../../app/components/context'
import { Container, Card } from './style'

export default () => {

    const {
        notificationData
    } = useContext(AppContext)

    return (
        <Container
            active={notificationData.active ? 1 : 0}
        >
            <Card>
                {notificationData.component}
            </Card>
        </Container>

    )
}