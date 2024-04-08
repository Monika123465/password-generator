import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

const Github = () => {
    const data=useLoaderData()

    
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Monika123465')
    //     .then(res=>res.json())
    //     .then(data=>
            
    //         setData(data))
    //         console.log(data)

    // }, [])
  return (
    <div>Github followers :{data.followers}
    <img src={data.avatar_url} />
    </div>
  )
}

export default Github

export const githubinfoloader=async()=>{
    const res=await fetch('https://api.github.com/users/Monika123465')
    console.log(res)
    return res.json()
}