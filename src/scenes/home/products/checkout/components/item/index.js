import React from 'react'
import {
    Container,
    ContainerSubTotal,
    SubTotal,
    Content,
    ContainerName,
    Name,
    Button,
    Add,
    Remove,
    ContainerQuantity,
    Quantity,
    RemoveProduct
} from './style'

export default ({
    name,
    quantity,
    subTotal,
    removeQuantity,
    addQuantity,
    removeProduct
}) => {
    return (
        <Container>
            <Content>
                <Button
                    onClick={removeQuantity}
                >
                    <Remove>
                        -
                    </Remove>
                </Button>
                <ContainerQuantity
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Quantity>
                        {quantity}
                    </Quantity>
                </ContainerQuantity>
                <Button
                    onClick={addQuantity}
                >
                    <Add>
                        +
                    </Add>
                </Button>
                <ContainerName>
                    <Name>
                        {name}
                    </Name>
                </ContainerName>
            </Content>
            <ContainerSubTotal>
                <SubTotal>
                    {subTotal}
                </SubTotal>
            </ContainerSubTotal>
            <Button
                 onClick={removeProduct}
            >
                <RemoveProduct>
                    -
                </RemoveProduct>
            </Button>
        </Container>
    )
}