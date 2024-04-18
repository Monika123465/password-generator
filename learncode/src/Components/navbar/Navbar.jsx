import { Avatar, Box, Button, ButtonGroup, Container, Typography } from '@mui/material'
import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

const Navbar = () => {
    
  return (
    
      <Box  component='center'  marginRight='2'  bgcolor='black' sx={{
        marginTop:"-8px"
      }}>
         <Container 
         component='center'
         sx={{
         height:"80px",
         padding:'10px' ,
         margin:'5px',
         display:'flex',
         alignItems:'center',
         gap:'120px',
         justifyContent:'space-evenly',
         boxShadow:'box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;',
         
         }}>
           <Typography component='div' sx={{
            marginLeft:'-250px'
           }}>
             <Link to='/'  >
             <Avatar sx={{ width: '120px', height: '50px',marginRight:'120px'  }}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgngeMIjuzwQq2QclV3VCjkGD5o2R6wy8WasJxcXnNqA&s' alt='err' />
              </Link> 
           </Typography>
           <Typography component='div'>
           <ButtonGroup >
           <Button variant="outlined" ><Link to='product' >Product</Link></Button> 
           <Button variant='outlined'><Link to='addtodos'>Todo</Link></Button> 
           <Button variant='outlined'><Link  to='todo'>TodoList</Link></Button>
           <Button variant='outlined'><Link to='login'>Login</Link></Button>
            </ButtonGroup> 
             
            
           </Typography>
         </Container>
      </Box>
      
    
    
  )
}

export default Navbar