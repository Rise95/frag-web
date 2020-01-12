import React from 'react'
import {
    Option
} from './style'

export default ({
    _id,
    name
}) => {
    return (
        <Option value={_id}>{name}</Option>
    )
}