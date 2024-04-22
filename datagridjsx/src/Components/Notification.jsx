import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, ButtonGroup, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import React, { useEffect, useState, } from 'react'

const Notification = () => {
  const [notification, setNotification] = useState([])
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(10)
   const[skip,setSkip]=useState(0)
   const[search,setSearch]=useState('')
   const[status,setStatus]=useState('')

   const PageMove=(count)=>{
    setSkip(Math.max(count+skip,0))
   }

  const apifetching = async () => {
    setLoading(true)
    fetch(`https://glm.spideyworld.co.in/notification-logs?limit=${limit}&skip=${skip}&status=${status}`)
      .then((res) => {
       setLoading(false)
        return res.json()
      })
      .then(data => setNotification(data.logs))
  }
  useEffect(() => {
    apifetching()
    setLoading(true)
  }, [limit,skip])

  const filterData=notification.filter(row=>row.phone.includes(search))
  
  //console.log(notification)
  return (
    <>
      <Box component='div' sx={{
        marginLeft: '224px'
      }}>
        <Box  sx={{gap:'10px',display:'flex'}}>
          <TextField size='small' placeholder='Search'value={search} onChange={(e)=>setSearch(e.target.value)}  />
          <FormControl sx={{width:'200px'}}>
        <InputLabel id="demo-simple-select-label">CreatedAt</InputLabel>
        <Select size='small'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={(e)=>{
            return setStatus(e.target.value)
          }}
        >
     <MenuItem value='all' >All</MenuItem>
      </Select>
      </FormControl>
        </Box>
        <TableContainer component={Paper} >
          {
            loading ? 'loading' :
            <Table sx={{ minWidth: '650px ' }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell width={150} >Phone</TableCell>
                    <TableCell width={150} >Status</TableCell>
                    <TableCell width={200} >Template</TableCell>
                    <TableCell width={200} >CreatedAt</TableCell>
                    <TableCell width={100} >Payload</TableCell>
                    <TableCell width={100} >Message</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filterData.map((row) => {
                    return <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  >
                      <TableCell component='th' scope='row'>{row.phone}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.template}</TableCell>
                      <TableCell>{new Date(row.createdAt).toLocaleString()}</TableCell>
                      <TableCell><Button variant='outlined' >Payload</Button></TableCell>
                      <TableCell><Button variant='outlined'>Message</Button></TableCell>
                    </TableRow>
                  })}

                </TableBody>

              </Table>
          }

        </TableContainer>
        <Box>
          <ButtonGroup>
            <Button onClick={() => PageMove(-limit)} disabled={skip==0}>prev</Button>
            <Button onClick={() => PageMove(limit)} >next</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  )
}

export default Notification