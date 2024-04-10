import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import {useQuery} from "react-query"

const Products = () => {

const {isLoading,data}=useQuery('products',()=>fetch('https://dummyjson.com/products')
.then((res)=>res.json())
.then(data=>data.products)
)

if(isLoading)return <h3>loading...</h3>


  // const [data,setData]=useState([])
  // const [isloading,setIsloading]=useState(false)


  // useEffect(()=>{
  //   try {
  //     setIsloading(true)
  //     fetch('https://dummyjson.com/products')
  //    .then((res)=>res.json())
     
  //    .then(data=>setData(data.products))
  //     setIsloading(false)
      
  //   } catch (error) {
  //     console.log(error)
  //     setIsloading(false)
      
  //   }
  //   },[])
  //   if(isloading){
  //     return <h3>...loading</h3>
  //   }
    
  return (
    <>
  <h3 style={{marginBottom:'60px'}}>Product List </h3>
  
   <div style={{display:'grid',gridTemplateColumns:'auto auto auto',gap:'60px',alignItems:'center'}}>
    {data.map(data=>(
      <div key={data.id}  style={{width:'300px', boxShadow:'inherit',borderRadius:'10px',}} >
       <Link to={`/product/${data.id}`} ><img style={{width:'90%'}}  src={data.images[0]} alt='err'/></Link>
       <div>{data.title}</div>
       <div>{data.description}</div>
       <div> category:{data.category}</div> 
       <div>Price:₹{data.price}</div>
      </div>
      
    ))}
   </div>
    
    </>
  )
}

export default Products