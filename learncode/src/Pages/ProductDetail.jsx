import React from 'react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { Container, Typography,Box,Grid,Card,Avatar, CardContent, TextField, ButtonGroup,Button } from '@mui/material'
import {Link} from '@mui/material'
import { useSearchParams } from "react-router-dom";
import debounce from 'lodash.debounce';

const ProductDetail =() => {
  const[searchparams,setSearchparams]=useSearchParams({skip:0,limit:4});
  const limit= parseInt(searchparams.get('limit')||0)
  const skip=parseInt(searchparams.get('skip')||0)
  const q=searchparams.get('q')||0
  
  
  const {isLoading,error,data:product}=useQuery({
        queryKey:['product',limit,skip,q],
        queryFn:async()=>{
       const data=await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&q=${q}`)
           .then((res)=>(res.json()))
           return data.products
           
         },
         placeholderData:keepPreviousData,
         staleTime:10000
        })
        const {data:categories}=useQuery({
          queryKey:['categories'],
          queryFn:
          async()=>{
            const data=await fetch('https://dummyjson.com/products/categories')
            .then((res)=>(res.json()))
            return (data)
         }
        
        })
          
        const PageMove=(pagecount)=>{
          setSearchparams((prev)=>{
            prev.set('skip',Math.max(skip+pagecount,0))
            return prev
          })

        }
        
       // console.log('hii',categories)
    if(isLoading) return <Typography>...Loading</Typography>
    if(error) return <Typography>Error:{error}</Typography>
    return (
    <>
     <Box  sx={{
    display:'flex',
    gap:'45px'
   }}>
  <TextField variant='filled' type='text' placeholder="SEARCH" size='small' sx={{
    width:"1000px",border:'transparent',marginLeft:'200px'
  }}  
  onChange={debounce((e)=>{
    setSearchparams((prev)=>{
      prev.set('q',e.target.value)
     prev.set('skip',0)
     return prev
    })
  },1000)}
  />
 <select style={{
    width:'300px'
  }}  >
    <option>Categries</option>
    
     {categories?.map((data)=>{
      
    <option key={data}> {data}</option>
    })}
    
 
  </select>


  
  
   </Box>
   
   <Grid container direction='row' justifyContent='center' alignItems='center' gap='40px'>
    {product?.map(el=>(
      
    <Link to={`/Products/${el.id}`} ><Card sx={{width:'300px'}}  >
       <CardContent sx={{boxShadow:'none',width:'200px',height:'150px',marginLeft:'30px',marginTop:'10px'}} key={el.id}>
       <Avatar sx={{width:'100%',height:'100%'}}  variant='square' alt='err' src={el.images[0]}/> </CardContent>
       <CardContent >
        <CardContent sx={{display:'flex' ,marginTop:'-30px',justifyContent:'space-around' }}>
        <Typography variant='p' >{el.title}</Typography>
        <Typography>{el.category}</Typography>
        </CardContent>
       
        <Typography>{el.description}</Typography></CardContent>
        
      </Card>  </Link>
    ))}
    </Grid>

    <Box sx={{marginLeft:'210px',marginTop:'25px'}}>
      <ButtonGroup>
        <Button variant='outlined'  onClick={()=>PageMove(-limit)}>Prev</Button>
        <Button variant='outlined' onClick={()=>PageMove(limit)} >Next</Button>
      </ButtonGroup>
    </Box>
    </>
  )
}

export default ProductDetail