import React from 'react'
import {
    Container,
    Content,
    ContainerList
} from './style'
import Select from './components/select'
import List from './components/list'

export default () => {

    return (
        <Container>
            <Content>

                <Select />

                <ContainerList>

                    <List />

                </ContainerList>

            </Content>
        </Container>
    )
}