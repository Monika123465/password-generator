
import {Box,Stack,Avatar,Typography,Card,Grid} from "@mui/material"
import {useQuery} from "@tanstack/react-query"
import {Link} from "react-router-dom"

const Product = () => {

  const {isloading,data}=useQuery({
    
    queryKey:['product'],
    queryFn:()=>fetch('https://dummyjson.com/products')
    .then((res)=>res.json())
    .then(data=>data.products)

  })

  if(isloading) return <Typography>...Loading</Typography>
  // const [product,setProduct]=useState([])
  // const [isloading,setIsloading]=useState(false)



//   useEffect(()=>{
//    try {
//     setIsloading(true)
//     fetch('https://dummyjson.com/products')
//     .then((res)=>res.json())
//     .then(data=>setProduct(data.products))
//     setIsloading(false)
      
//     } catch (error) {
//       console.log(error)
//       setIsloading(false)
//     }

//   },[])
//  if(isloading) return <Typography variant='h3'>...Loading</Typography>
  
  return (
    <>
    <Box>Product</Box>
    <Grid container direction='row' justifyContent='center' alignItems='center' gap='40px'>
    {data ?.map(el=>(
      <Card sx={{width:'300px'}}  key={el.id}>
       <Card sx={{boxShadow:'none',border:'1px solid green',width:'200px',height:'150px'}}><Link to={`/products/${el.id}`}>
       <Avatar sx={{width:'100%',height:'100%'}}  variant='square' alt='err' src={el.images[0]}/></Link> </Card>
        <Typography variant='h6'>{el.title}</Typography>
        <Typography>{el.category}</Typography>
        <Typography>{el.description}</Typography>
        
      </Card>
    ))}
    </Grid>

    </>
  )
}

export default Product