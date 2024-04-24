import React, { useState } from 'react'
import { useQueries } from '@tanstack/react-query'

const Parrel = () => {
    const[userIds,setUserIds]=useState([1,2])

    const userQueries=useQueries({
      queries:userIds.map((id)=>{
        return {
          queryKey:['user',id],
          queryFn:async()=>{
            const data=await fetch('https://dummyjson.com/users')
                       .then((res)=>res.json())
                       return data.users

          }

        }
      })
      
    })
  return (
    <>
    <div>
        <button>
            Load more
        </button>
        {userIds.map((row)=>{
            <h1 key={row}>{row}</h1>
        })}
    </div>
    
    </>
  )
}

export default Parrel