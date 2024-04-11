import React from 'react'
import {useQuery} from 'react-query'

const User = () => {
    const {isLoading,error,data}=useQuery('userdata',()=>
fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json())
)
if(!isLoading) return <p>Loading...</p>
if (error) return <p>Error:{error.message}</p>
  return (
    <>
    {data.map(datas=><li key={datas.id}>
         {data}
    </li>)}
    
    </>
  )
}

export default User