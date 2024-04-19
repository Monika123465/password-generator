import React from 'react'
import {  useQuery
    } from '@tanstack/react-query'

const useCategoryHook = () => {


    const callApi = async () => {
        const data = await fetch('https://dummyjson.com/products/categories')
            .then((res) => (res.json()))
        return (data)
    }

    return useQuery({
        queryKey: ['categories'],
        queryFn: callApi,
    })


}


export default useCategoryHook