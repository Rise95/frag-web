import React from 'react'
import Option from '../option'
export default ({
    data,
    loading
}) => {
    if (loading) {
        return (
            <option value="" > Carregando categorias </option>
        )
    } else if (data && data.length > 0) {
        return data.map((option, index) => {
            return (
                <Option
                    key={index}
                    {...option}
                />
            )
        })
    } else {
        return <option value="" > Não possui categorias </option>
    }
}