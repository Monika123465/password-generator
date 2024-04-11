import { Link } from "react-router-dom"
import {Box,Button} from "@mui/material"


function App() {
  

  return (
    
    <Box  sx={{border:'1px solid green',marginLeft:'60px',marginTop:'-80px'}} >
      
     <Link to='/'></Link>
      <Button color="secondary" ><Link to='product'>Product</Link></Button>
      <Button><Link to='products'>Products</Link></Button>
      <Button><Link to='todo'>Todo</Link></Button>

      </Box>
        
  )
}

export default App
