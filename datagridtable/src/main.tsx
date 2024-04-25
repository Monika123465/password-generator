import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import User from './Components/User.tsx'
import Table from './Components/Table.tsx'

const routers=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'user',
    element:<User/>
  },
  {
    path:'table',
    element:<Table/>
  }
    

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routers}>
  <React.StrictMode>
    <App />
  </React.StrictMode></RouterProvider>
)
