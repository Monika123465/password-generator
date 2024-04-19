import React from 'react'
import {  useQuery} from '@tanstack/react-query'

const useProductHook = ({limit, skip, q,category}) => {


    return useQuery({
        queryKey:['product',limit,skip,q,category],
        queryFn:async()=>{
       const data=await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&q=${q}`)
           .then((res)=>(res.json()))
           return data.products
           
         },
         staleTime:10000
        })
     
}

export default useProductHook