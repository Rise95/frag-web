import React, { useContext } from 'react'
import {
    Select
} from './style'
import { AppContext } from '../../app/components/context'
import Options from './components/options'

export default ({
    data,
    loading
}) => {
    const { setCategorySelectedId } = useContext(AppContext)
    return (
        <Select onChange={e => setCategorySelectedId(e.target.value)}>
            <Options
                data={data}
                loading={loading}
            />
        </Select>
    )
}