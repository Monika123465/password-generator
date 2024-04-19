import { Box, Button, Card, Container, FormControl, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate=useNavigate()
  
const handlebutton=()=>{
navigate('../signin')
}
const userarr=JSON.parse(localStorage.getItem('users'))||[]
const handletoSubmit=(e)=>{
  e.preventDefault()
  for(let i=0;i<userarr.length;i++){
    if(userarr[i].email==email && userarr[i].password==password){
     
      window.alert('login successfull,redirect to Product Page')
      navigate('../product')
    }
    
  }
  if(!email ||!password){
    window.alert('check your email and password first')
  }


}

  return (
    <>
    <Box>
        <Container sx={{ marginLeft: '700px', marginTop: '120px', marginBottom: '40px' }}>
          <Typography variant='h3'>Login</Typography>
        </Container>
        <Box component='form' sx={{ marginLeft: '700px' }} onSubmit={handletoSubmit} >
          <Grid xs={12} sm={6} item>
            <TextField label="Email" 
              placeholder='Enter email'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </Grid>

          <br />

          <Grid xs={12} sm={6} item>
            <TextField label="Password"
            
              placeholder='Enter Password'
              type='password' value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </Grid>

          <br />

          <div>
            <Button type='submit' variant='outlined' sx={{ marginLeft: '60px' }}>Login</Button>
          </div>
          

          <Typography sx={{ marginBottom: '120px', marginTop: "10px" }}>Not registe yet ! <Button onClick={handlebutton} >SignUp</Button></Typography>
          </Box>
        
      </Box>
    </>
    
  )
}

export default Login