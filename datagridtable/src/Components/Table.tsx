import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'

const Table:React.FC = () => {
  const[table,setTable]=useState<any[]>([])
  const[loading,setLoading]=useState<Boolean>(false)
  
  useEffect(()=>{
    setLoading(true)
    fetch('http://172.30.2.35:8080/api-logs').then((res)=>(res.json()))
     .then(data=>setTable(data.logs))
setLoading(false)

  },[])

  const columns:GridColDef[]=[
    // {
    //   field:'_id',
    //   headerName:'ID',
    //   width:200

    // },
    {
      field:'user',
      headerName:'User',
      width:200,
      renderCell:(params)=>(
        <div>
          
          {params.row.user.name}
        </div>
      )

    },
    {
      field:'baseUrl',
      headerName:'BaseUrl',
      width:250
    },
    {
      field:'createdAt',
      headerName:'CreatedAt',
      width:250

    },
    {
      field:'status',
      headerName:'Status',
      width:200

    },
    {
      field:'method',
      headerName:'Method',
      width:200
    },
    // {
    //   field:'user',
    //   headerName:"Phone",
    //   width:200,
    //   renderCell:(params)=>(
    //     <div>{`${params.row.user.phone}`}</div>
    //   )
    // }
  ]

  return (
    <div>
      {loading ? <>Loading</>:
      <DataGrid
      getRowId={(row) => row._id}
         checkboxSelection
       rows={table} 
       columns={columns}
       
       
       />}
    </div>


    
  )
}

export default Table