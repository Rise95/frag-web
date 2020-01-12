import React, { useEffect, useContext, useCallback } from 'react'
import useAxios from 'axios-hooks'
import { AppContext } from '../../../../../../app/components/context'
import Select from '../../../../../../components/select'

export default () => {
    const {
        categoryData,
        tokenType,
        accessToken,
        setCategoryData
    } = useContext(AppContext)

    const [{ loading }, executeCategories] = useAxios({
        url: 'http://localhost:3007/api/categories',
        method: 'GET',
        headers: {
            Authorization: `${tokenType} ${accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
    }, { manual: true })

    const executeCategoriesCallback = useCallback(async () => {
        try {

            const response = await executeCategories()

            const { data } = response

            if (data && data.length > 0) {

                let category = data
                category.unshift({ _id: "", name: "Todos", __v: 0 });

                setCategoryData(category)

            }

        } catch (e) {
            console.log(e)
        }

    }, [])

    useEffect(() => {

        executeCategoriesCallback()

    }, [])

    return (
        <Select
            data={categoryData}
            loading={loading}
        />
    )
}