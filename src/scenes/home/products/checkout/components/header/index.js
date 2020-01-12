import React from 'react'
import {
    FaShoppingBasket
} from 'react-icons/fa'
import {
    Container,
    Content,
    Title,
    ContentTitle,
    ContainerIcon
} from './style'

export default () => {
    return (
        <Container>
            <ContainerIcon>
                <FaShoppingBasket 
                    size={70}
                    color="#000"
                />
            </ContainerIcon>
            <Content>
                <Title>
                    Mack
                </Title>
                <ContentTitle>
                    09:54:34 min restantes
                </ContentTitle>
            </Content>
        </Container>
    )
}