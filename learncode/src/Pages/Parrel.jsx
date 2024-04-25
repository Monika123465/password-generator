import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'


const Parrel = () => {
const {isLoading,data:user}=useQuery({
  queryKey:['user'],
  queryFn:async()=>{
    const data=await fetch('https://dummyjson.com/users').then((res)=>res.json())
    return data.users
  }
  
})
console.log(user)
  
    
return (
    <>
    
    
       
       
    </>
  )
}

export default Parrel