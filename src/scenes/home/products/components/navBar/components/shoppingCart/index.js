import React from 'react'
import {
    FaShoppingCart
} from 'react-icons/fa'
import {
    Container,
    Badge,
    Text,
    Button,
    ContainerNull
} from './style'

export default ({
    history,
    shoppingCartLength
}) => {

    if (
        history &&
        history.location &&
        history.location.pathname === '/home/products/checkout'
    ) {
        return <ContainerNull />
    } else {
        return (
            <Container>
                <Badge>
                    <Text>
                        {shoppingCartLength}
                    </Text>
                </Badge>
                <Button
                    onClick={() => history.push('/home/products/checkout')}
                >
                    <FaShoppingCart
                        size={35}
                        color={`#fff`}
                    />
                </Button>
            </Container>
        )
    }

}