import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter,createRoutesFromElements,} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Login from './Login/Login';
import Getstart from './components/getstart/Getstart';
import Github, { githubinfoloader } from './components/Github/Github';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path:'About',
        element:<About/>
      },
      {
        path:'Contact',
        element:<Contact/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {path:'Get Started',
         element:<Getstart/>
    },
    {
      loader:{githubinfoloader},
      path:'Github',
      element:<Github/>
    }

    ]


  },


])

// const router=createBrowserRouter(
// createRoutesFromElements(
//   <Route></Route>
// )
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
