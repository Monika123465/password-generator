import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link} from "react-router-dom"

function App() {
  

  return (

    <>
    <div>The react query project</div>
    <div style={{display:'flex' ,gap:'40px'}}> 
      <Link to='/' >Home</Link>
      <Link to='product'>Product</Link>
      <Link to='products'>Products</Link>
    </div>
      
       </>
  )
}

export default App
