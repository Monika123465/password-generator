

import { Badge, Box, Checkbox, MenuItem, Rating, Select, Slider, Stack, Switch, TextField, Typography } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import './App.css'
import {  VolumeDown, VolumeUp } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';


function App() {
   return (
    <>
  <Box sx={{ padding:{xs:'12px',lg:'2px'},marginLeft:{xs:'60px',lg:'45px'},fontSize:'25px', display:{
    xs:'flex'},justifyContent:'center',gap:'20px' ,weight:'800px',height:'60px',alignItems:'center'}} >
  <Typography >hello</Typography>
  <Typography>monika</Typography>
  <Typography>kaise ho</Typography>
  <Checkbox defaultChecked  />
  <Rating defaultValue={3} name='size-small'  size='small'/>
  
  {/* <Fab size='small' color='secondary' aria-label='add'></Fab> */}
  <AccessAlarmIcon/>
  <Select
  name='demo-simple-select-label'
  label='age'>
    <MenuItem>Ten</MenuItem>
    <MenuItem>Twenty</MenuItem>
    <MenuItem>Thirty</MenuItem>
  </Select>
  <Stack direction='row' spacing={2} ><VolumeDown/>
  <Slider aria-label='volume' size='small' defaultValue={50} valueLabelDisplay='auto' /><VolumeUp/>
  </Stack>
  <Switch defaultChecked size='small' />
  <TextField variant='outlined' label='outlined'/>
  <TextField variant='filled' label='filled'/>
  <TextField variant='standard' />
  <Badge badgeContent={4} color='primary'>
<EmailIcon color='action'/>
  </Badge>
  </Box>
  
    </>
  )
}

export default App

