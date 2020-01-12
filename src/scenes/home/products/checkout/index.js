import React, { useContext } from 'react'
import { AppContext } from '../../../../app/components/context'
import {
    Container,
    Content,
    ContainerList,
    Button,
    CheckOut,
    ContainerTitle,
    Title,
    Body,
    ContainerTotal,
    Total,
    ContainerTotalValue,
    TotalValue,
    Footer
} from './style'
import List from './components/list'
import Header from './components/header'
import Request from '../../../../components/notification/components/request'

const calculeTotal = ({
    shoppingCartData
}) => {
    let temp = 0.00
    shoppingCartData.forEach(shopping => {
        if (shopping.subTotal) {
            temp = (parseFloat(temp) + parseFloat(shopping.subTotal)).toFixed(2)
        }
    });
    return temp
}

export default () => {

    const {
        shoppingCartData,
        setNotificationData
    } = useContext(AppContext)


    return (
        <Container>
            <Content>
                <ContainerTitle>
                    <Title>
                        Finalizar pedido
                    </Title>
                </ContainerTitle>

                <Header />

                <div
                    style={{
                        paddingBottom: 17
                    }}
                >
                    <span style={{ fontSize: 20 }}> Revise os seus items </span>
                </div>

                <ContainerList>

                    <List
                        data={shoppingCartData}
                    />

                </ContainerList>

                <Body active={shoppingCartData.length > 0 ? 1 : 0}>
                    <ContainerTotal>
                        <Total>
                            Total
                        </Total>
                    </ContainerTotal>
                    <ContainerTotalValue>
                        <TotalValue>
                            {`R$ ${calculeTotal({ shoppingCartData })}`}
                        </TotalValue>
                    </ContainerTotalValue>
                </Body>

                <Footer active={shoppingCartData.length > 0 ? 1 : 0}>
                    <Button
                        onClick={() => {
                            setNotificationData({
                                active: true,
                                component: <Request />
                            })
                        }}
                    >
                        <CheckOut>
                            Finalizar compra
                        </CheckOut>
                    </Button>
                </Footer>

            </Content>
        </Container>
    )
}