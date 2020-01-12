import React from 'react'
import {
    FaArrowLeft
} from 'react-icons/fa'
import {
    Button,
    ContainerNull
} from './style'

export default ({
    history
}) => {

    if (
        history &&
        history.location &&
        history.location.pathname === '/home/products/list'
    ) {
        return <ContainerNull />
    } else {
        return (
            <Button
                onClick={() => history.goBack()}
            >
                <FaArrowLeft
                    size={35}
                    color="#fff"
                />
            </Button>
        )
    }

}