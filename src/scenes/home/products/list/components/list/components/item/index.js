import React from 'react'
import {
    Container,
    Title,
    Button,
    Content,
    ButtonText
} from './style'

export default ({
    name,
    onClick
}) => {
    return (
        <Container>
            <Content>
                <Title>
                    {name}
                </Title>
                <Button onClick={onClick}>
                    <ButtonText>
                        Adicionar no carrinho
                    </ButtonText>
                </Button>
            </Content>
        </Container>

    )
}