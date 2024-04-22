
import { Box, Button, ButtonGroup } from '@mui/material'
import User from './Components/User'
import { Link } from 'react-router-dom'


import React from 'react'


const App = () => {
  return (
    
    <>
  
    <Box>
      <ButtonGroup>
     <Button><Link to='user'>User</Link></Button>   
   <Button><Link to='Notification'>Notification</Link></Button>
      </ButtonGroup>
    
    </Box>
    </>
  )
}

export default App

