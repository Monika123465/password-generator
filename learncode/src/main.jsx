import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Pages/Layout.jsx'
import Product from './Pages/Product.jsx'
import Products from './Pages/Products.jsx'
import Todo from './Pages/Todo.jsx'
import Login  from './Components/Login/Login.jsx'
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const queryclient=new QueryClient()


const routers=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[

      {
        path:"Product",
      element:<Product/>
    },
    {
      path:'Products/:id',
      element:<Products/>
    },
    {
      path:'Todo',
      element:<Todo/>
    },
    {
      path:'login',
      element:<Login/>
    }
    ]
    
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <QueryClientProvider client={queryclient} >
  <RouterProvider router={routers}>
    <App />
  </RouterProvider></QueryClientProvider>
  
  
)
