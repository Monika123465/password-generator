import React from 'react'
import { useEffect, useState } from 'react'



import { Box, Button, ButtonGroup, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'



const User = () => {

  const [table, setTable] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(10)
  const [skip, setSkip] = useState(0)
  const[status,setStatus]=useState([])

 // const statusOption = {
  //   status: [200, 304]
  // };
  
    

  const pageMove = (pagecount) => {
    setSkip(Math.max(pagecount + skip, 0))

  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
const fetchapi=async()=>{
  const data= await fetch(`https://glm.spideyworld.co.in/api-logs?limit=${limit}&skip=${skip}&search=${search}&status=${status}`,)
  .then(res => {
    setLoading(false)
    return res.json()
  })
  return setTable(data.logs)
}

  useEffect(() => {
    fetchapi()
    setLoading(true)
    
  }, [limit, skip,search,status])


  const filteredTable = table.filter(row =>
    row.user.name.toLowerCase().includes(search.toLowerCase())
  );
  // const statusOption=()=>{
  //   const newset=new Set(table.map(row=>row.status))
  //   return Array.from(newset)
  // }
//console.log('hii',statusOption())
 // console.log(filteredTable)
  return (
    <>

      <Box component='div'   sx={{
        marginLeft: '400px'
      }}>
        <Box sx={{display:'flex',justifyContent:'flex-end',gap:'10px'}}>
<Box  sx={{ marginLeft:'400px'}}><TextField size='small' placeholder='search' value={search} onChange={handleChange} /></Box>
          
          <FormControl sx={{width:'300px'}}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
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
      {/* {statusOption.map((data)=>{
         <MenuItem key={data} value={data}>{console.log('data',data)} </MenuItem>
        })}
         */}
      </Select>
      </FormControl>
          
        </Box>
        <TableContainer component={Paper}>
          {
            loading ? "loading" :
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell width={300}>User</TableCell>
                    <TableCell width={200} >BaseUrl</TableCell>
                    <TableCell width={100} >Method</TableCell>
                    <TableCell width={100}>Status</TableCell>
                    <TableCell width={100}>Duration</TableCell>
                    <TableCell width={200}>CreatedAt</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>

                  {filteredTable?.map((row) => {
                    
                    return <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  >
                      <TableCell component="th" scope="row">  {row.user.name} </TableCell>
                      <TableCell >{row.baseUrl}</TableCell>
                      <TableCell >{row.method}</TableCell>
                      <TableCell >{row.status}</TableCell>
                      <TableCell  >{row.duration}</TableCell>
                      <TableCell>{
                        new Date(row.createdAt).toLocaleString()
                      }</TableCell>

                    </TableRow>
                  })}
                </TableBody>
              </Table>
          }
        </TableContainer>
        <ButtonGroup>
          <Button onClick={() => pageMove(-limit)} disabled={skip == 0}>Prev</Button>
          <Button onClick={() => pageMove(limit)}>Next</Button>
        </ButtonGroup>


      </Box>
    </>

  )
}

export default User