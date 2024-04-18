import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import {  Typography,Grid,Card,Avatar, CardContent } from '@mui/material'

const Products = () => {
  const params=useParams()
  const {isLoading,error,data:product}=useQuery({
    queryKey:['product'],
    queryFn:async()=>await fetch(`https://dummyjson.com/products/${params.id}`)
    .then((res)=>(res.json()))
    
    .then(data=>data)
  })
  if(isLoading) return <Typography>...Loading</Typography>
  if(error) return <Typography>Error:{error}</Typography>
  console.log(product)
  return (
    <>
     <Grid container direction='row' justifyContent='center' alignItems='center' gap='40px'>
  
  {
    !product ?  <Typography>...not available data</Typography>:
    <Card sx={{width:'300px'}}  >
       <CardContent sx={{boxShadow:'none',width:'200px',height:'150px',marginLeft:'30px',marginTop:'10px'}} >
       <Avatar sx={{width:'100%',height:'100%'}}  variant='square' alt='err' src={product.images[0]}/> </CardContent>
       <CardContent >
        <CardContent sx={{display:'flex' ,marginTop:'-30px',justifyContent:'space-around' }}>
        <Typography variant='p' >{product.title}</Typography>
        <Typography>{product.category}</Typography>
        </CardContent>
       
        <Typography>{product.description}</Typography></CardContent>
        
      </Card>
} 
</Grid>
  
    
    </>
  )
}

export default Products