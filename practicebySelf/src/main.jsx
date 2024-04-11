import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Product from './Components/product/Product.jsx'
import Products from './Components/products/Products.jsx'
import Todo from './Components/Todo/Todo.jsx'
 
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"



const queryclient=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:'10000'
    }
  }
})

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'product',
    element:<Product/>
  },
  {
    path:'products/:id',
    element:<Products/>
  },
  {
    path:'todo',
    element:<Todo/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryclient}>
  <RouterProvider router={router}>
   {/* <React.StrictMode>  */}
    <App />
   {/* </React.StrictMode> */}
  </RouterProvider>
  </QueryClientProvider>
)
