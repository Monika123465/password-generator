import React from 'react'
import {useParams} from "react-router-dom"
import {useQuery} from "@tanstack/react-query"

import {Box,Stack,Avatar,Typography,Card,Grid} from "@mui/material"

const Products = () => {
  const param=useParams()

  const{isloading,data}=useQuery({
    queryKey:['product',param.id],
    queryFn:()=>(
      fetch(`https://dummyjson.com/products/${param.id}`)
      .then((res)=>res.json())
      .then(data=>data)
    )
  })
if(isloading) return <Typography>...loading</Typography>

console.log(data)

  return (
    <>
    <div>Products</div>
    {/* <Grid container direction='row' justifyContent='center' alignItems='center' gap='40px'>
    {data.map(el=>(
      <Card sx={{width:'300px'}}  key={el.id}>
       <Card sx={{boxShadow:'none',border:'1px solid green',width:'200px',height:'150px'}}><Link to={`/products/${el.id}`}>
       <Avatar sx={{width:'100%',height:'100%'}}  variant='square' alt='err' src={el.images[0]}/></Link> </Card>
        <Typography variant='h6'>{el.title}</Typography>
        <Typography>{el.category}</Typography>
        <Typography>{el.description}</Typography>
        
      </Card>
    ))}
    </Grid> */}
    </>
  )
}

export default Products