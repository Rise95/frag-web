import React, { useContext } from 'react'
import { AppContext } from '../../../../app/components/context'
import {
    FiCheckCircle,
} from 'react-icons/fi'
import { Container, Message, Button, Text } from './style'

export default () => {

    const { setNotificationData } = useContext(AppContext)

    return (
        <Container>
            <FiCheckCircle
                size={60}
                color="green"
            />
            <Message>
                Pedido realizado com sucesso!
            </Message>
            <Button
                onClick={() => {
                    setNotificationData({
                        active: false,
                        component: undefined
                    })
                }}
            >
                <Text>
                    Fechar
                </Text>
            </Button>
        </Container>
    )
}