import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Product from './Components/product/Product.jsx'
import Products from './Components/products/Products.jsx'
import {QueryClient,QueryClientProvider} from "react-query"


const queryclient=new QueryClient()

const Router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'product/:id',
    element:<Product/>
  },
  {
    path:'products',
    element:<Products/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
 <QueryClientProvider client={queryclient}>
  <RouterProvider  router={Router}>
    <App />
    </RouterProvider>
    </QueryClientProvider>
  //</React.StrictMode>,
)
