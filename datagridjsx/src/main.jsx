import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import User from './Components/User.jsx'
import Notification from './Components/Notification.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
const routers=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'user',
    element:<User/>

  },
  {
    path:'Notification',
    element:<Notification/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers}>
  
    <App />
  </RouterProvider>
)
