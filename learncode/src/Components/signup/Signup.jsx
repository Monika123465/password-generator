import { Box, Button, Card, Container, FormControl, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'



const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const navigate=useNavigate()

  const handlebutton=()=>{
    navigate('../login')
    }

  const handleClicktoSubmit = (e) => {
    e.preventDefault()
    if(!name =="" && !email =="" && !password==''){
    const userarr=JSON.parse(localStorage.getItem('users'))||[]
    const user={name,email,password}
      userarr.push(user)
    localStorage.setItem('users',JSON.stringify(userarr))
    window.alert('signup successfully')
      navigate('../login')
    }else{
      window.alert('Please fill the  details')
    }

  }
  return (
    <>
      <Box>
        <Container sx={{ marginLeft: '700px', marginTop: '120px', marginBottom: '40px' }}>
          <Typography variant='h3'>SignUp </Typography>
        </Container>
        <Box component='form' sx={{ marginLeft: '700px' }} onSubmit={handleClicktoSubmit} >
          <Grid xs={12} sm={6} item>
            <TextField label="Name"
              
              placeholder='Enter Name'
              type='text' value={name}
              onChange={(e) => setName(e.target.value)} />
          </Grid>
          <br />

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
            <Button type='submit' variant='outlined' sx={{ marginLeft: '60px' }}>Signup</Button>
           
          </div>
          

          <Typography sx={{ marginBottom: '120px', marginTop: "10px" }}>alerady register ! <Button onClick={handlebutton}>Login</Button></Typography>
          </Box>
         
      </Box>
    </>
  )
}

export default Signup