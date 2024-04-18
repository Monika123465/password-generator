
import { Container, Typography,Box,Grid,Card,Avatar, CardContent, TextField, Select, MenuItem, InputLabel, ButtonGroup,Button } from '@mui/material'

import { keepPreviousData, useQuery } from '@tanstack/react-query'
import debounce from 'lodash.debounce'
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Product = () => {
  const [searchparams,setSearchparams]=useSearchParams({skip:0,limit:4})
  const limit=parseInt(searchparams.get('limit')||0)
  const skip=parseInt(searchparams.get('skip')||0)
  const qu=searchparams.get('qu')||0
  const category=searchparams.get('category')||''
// const [product,setProduct]=useState([])
// const[isLoading,setIsLoading]=useState(false)
// const[Error,setError]=useState(null)
// bolo kya hua cateogry na ho rha
const {data:categories}=useQuery({
  queryKey:['categories'],
  queryFn:async()=>await fetch('https://dummyjson.com/products/categories')
  .then((res)=>(res.json()))
  .then(data=>data)
  
})
//console.log(category)

const {isLoading,error,data:product}=useQuery({
  queryKey:['product',limit,skip,qu,category],
  queryFn:async()=>{
    let url=`https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${qu}`
    if(category){
      url=`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
    }
    const data=await fetch(url)
    .then((res)=>(res.json()))

    return data.products
  },
  
  placeholderData:keepPreviousData,
  staleTime:20000,


})

const PageMove=(pagecount)=>{
  setSearchparams((prev)=>{
    prev.set('skip',Math.max(skip+pagecount,0))
    return prev
  })
}
// const handleChange=(e)=>{
//   setSearchparams((prev)=>{
//     prev.set('skip',0)
//     prev.delete('qu')
//     prev.set('category',e.target.value)
//     return prev
//   })
// }
// const PageMove=(pagecount)=>{
//   setSkip((prevskip)=>{
//     return Math.max(prevskip+pagecount,0)
//   })
// }
// useEffect(()=>{
//   try {
//     setIsLoading(true)
//     setError(null)
    
//     setIsLoading(false)
//   } catch (error) {
//     setError(err.message)
//     setIsLoading(false)
//     console.log(error)
//   }

// },[])
 if(isLoading) return <Typography variant='h2'>...Loading</Typography>
 if(error) return <Typography>Error:{Error}</Typography>
 //console.log(data)
  return (
    <>
    
   <Box  sx={{
    display:'flex',
    gap:'45px'
   }}>
  <TextField variant='filled' type='text' placeholder="SEARCH" size='small' sx={{
    width:"1315px",border:'transparent',marginLeft:'30px'
  }} onChange={debounce((e)=>{
    setSearchparams((prev)=>{
      prev.set('qu',e.target.value)
     prev.set('skip',0)
     prev.delete('category')
      return prev
    })
  },1000)}/>
 
 
  <select style={{
    width:'300px'
  }} 
  onChange={(e)=>{

    console.log("on change category")
    setSearchparams((prev)=>{
      console.log(prev)
      prev.set('skip',0)
      prev.delete('qu')

      prev.set('category',e.target.value)
      return prev
    })
  }} >
    <option>Categries</option>
    {categories.map((data)=>
    <option>{data} </option>)}
 
  </select>


  {/* <Select sx={{width:'300'}} onChange={handleChange}> 
  {categories.map((data)=>
  <MenuItem>{data}</MenuItem>
  
)}
  */}
  {/* </Select> */}
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
        <Button variant='outlined' onClick={()=>{PageMove(-limit)}}>Prev</Button>
        <Button variant='outlined' onClick={()=>{PageMove(limit)}}>Next</Button>
      </ButtonGroup>
    </Box>
    
    </>
  )
}

export default Product