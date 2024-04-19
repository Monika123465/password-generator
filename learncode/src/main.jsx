import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Pages/Layout.jsx'
import Product from './Pages/Product.jsx'
import Products from './Pages/Products.jsx'
import AddTodos from './Pages/AddTodos.jsx'
import Login  from './Components/Login/Login.jsx'
import Todo from './Pages/Todo.jsx'
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from './store/Store.jsx'
import Signup from './Components/signup/Signup.jsx'
import ProductDetail from './Pages/ProductDetail.jsx'


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
      path:'Addtodos',
      element:<AddTodos/>
    },
    {
      path:'signin',
      element:<Signup/>
    },
    {
      path:'login',
      element:<Login/>

    },
    {
      path:"todo",
      element:<Todo/>
    },
    {
      path:'productdetail',
      element:<ProductDetail/>
    }
    ]
    
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <QueryClientProvider client={queryclient} >
  <RouterProvider router={routers}>
    
    <App />
  </RouterProvider>
  </QueryClientProvider>
  </Provider>
  
  
)
