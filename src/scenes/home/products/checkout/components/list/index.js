import React, { useContext } from 'react'
import { AppContext } from '../../../../../../app/components/context'
import Item from '../item'
import Loading from '../../../../../../components/loading'

export default ({
    data,
    loading
}) => {

    const {
        removeQuantityProduct,
        addQuantityProduct,
        removeProduct
    } = useContext(AppContext)

    if (loading) {
        return <Loading type={1} />
    } else if (data && data.length > 0) {
        return data.map((item, index) => {
            return (
                <Item
                    removeQuantity={() => removeQuantityProduct({
                        index,
                        data
                    })}
                    addQuantity={() => addQuantityProduct({
                        index,
                        data
                    })}
                    removeProduct={() => removeProduct({
                        index,
                        data
                    })}
                    key={index}
                    {...item.product}
                    quantity={item.quantity}
                    subTotal={item.subTotal}
                />
            )
        })
    } else {
        return <div><h2> Carinho de compras esta vazio </h2></div>
    }
}