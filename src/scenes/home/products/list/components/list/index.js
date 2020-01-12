import React, { useContext, useCallback, useEffect } from 'react'
import useAxios from 'axios-hooks'
import { AppContext } from '../../../../../../app/components/context'
import Item from './components/item'
import Loading from '../../../../../../components/loading'

export default () => {

    const {
        tokenType,
        accessToken,
        shoppingCartData,
        addShoppingCart,
        categorySelectedId,
        productData,
        setProductData
    } = useContext(AppContext)

    const listProducts = () => {

        if (categorySelectedId.trim() !== '') {
            let array = productData.filter(product => {
                if (product.idCategory === categorySelectedId) {
                    return true
                } else {
                    return false
                }
            })
            return array
        } else {
            return productData
        }

    }

    const [{ loading }, executeProducts] = useAxios({
        url: 'http://localhost:3007/api/products',
        method: 'GET',
        headers: {
            Authorization: `${tokenType} ${accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
    }, { manual: true })

    const executeProductsCallback = useCallback(async () => {
        try {

            const response = await executeProducts()

            const { data } = response

            if (data && data.length > 0) {

                setProductData(data)

            }

        } catch (e) {
            console.log(e)
        }

    }, [])

    useEffect(() => {

        executeProductsCallback()

    }, [])

    if (loading) {
        return <Loading type={1} />
    } else if (listProducts() && listProducts().length > 0) {
        return listProducts().map((product, index) => {
            return (
                <Item
                    onClick={() => addShoppingCart({
                        product,
                        shoppingCartData
                    })}
                    key={index}
                    {...product}
                />
            )
        })
    } else {
        return <div><h2> Não possui produtos </h2></div>
    }
}