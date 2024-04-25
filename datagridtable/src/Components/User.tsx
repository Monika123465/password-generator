import { useEffect, useState } from 'react'
import { DataGrid ,GridColDef} from '@mui/x-data-grid'
import {useDemoData} from "@mui/x-data-grid-generator"

const User:React.FC=()=> {
  const [user,setUser]=useState<any[]>([])
  const[loading,setLoading]=useState<Boolean>(false)

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 15,
    maxColumns:8 ,
  });

  useEffect(()=>{
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json())
    .then(data=>setUser(data))
    setLoading(false)
  },[])
  
 // console.log(user)
  const columns: GridColDef[] = [
    { field: 'id',
     headerName: 'ID', 
     width: 150 ,
  },
    { field: 'name', headerName: 'Name', width: 150 },
    {field:'username',headerName:'UserName' ,width:200},
    {field:'email',headerName:'Email',width:200},
    {field:'address',headerName:'Address',width:400,
      renderCell:(params)=>(
        <div>
          {`${params.row.address.street},${params.row.address.suite},${params.row.address.city},${params.row.address.zipcode}`}
        </div>
      ),
      
    },
    {field:'company',headerName:'Company',width:200,
      renderCell:(params)=>(
        <div>
          {params.row.company.name}
        </div>
      )
    }
  ];

  return (
    <>
    
     
     <div style={{ height: 300, width: '100%' }}>
     {loading ? <>Loading</>:
      <DataGrid 
      {...data}
      rows={user}  
      columns={columns}
      checkboxSelection

      />}
      
    </div>
    </>
  )
}

export default User
