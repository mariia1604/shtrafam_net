import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import Reg from './reg/Reg'
import Log from './auth/Auth'
import { useSelector } from 'react-redux'
import MainPage from './MainPage'
import Add_request from './add_request.jsx';
import Done_requests from './done_requests.jsx';
import My_requests from './My_requests.jsx';
import Edit_admin from './edit_admin.jsx';
import Edit_user from './edit_user.jsx';
import Undone_requests from './undone_requests.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/reg" />
  },
  {
    path: '/reg',
    element: <Reg />
  },
  {
    path: '/auth',
    element: <Log />
  },
])

const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/reg',
    element: <Navigate to="/" />
  },
  {
    path: '/auth',
    element: <Navigate to="/" />
  }
])

const authRouterAdmin = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/reg',
    element: <Navigate to="/" />
  },
  {
    path: '/auth',
    element: <Navigate to="/" />
  },
  {
    path: 'admin',
    element: <>admin</>
  },
  {
    path: "/Done_requests",
    element: <Done_requests />,
  },

  {
    path: "/Undone_requests",
    element: <Undone_requests />,
  },
  {
    path: "/Edit_admin",
    element: <Edit_admin />,
  },
  {
    path: "/Add_request",
    element: <Add_request />,
  },
  {
    path: "/My_requests",
    element: <My_requests />,
  },
  {
    path: "/Edit_user",
    element: <Edit_user/>,
  }
])


function App() {

  const token = useSelector((state) => state.auth.token)
  const role = useSelector((state) => state.auth.role)

  console.log(token);


  return (
    token ? role === "ADMIN" ? <RouterProvider router={authRouterAdmin} /> : <RouterProvider router={authRouterAdmin} /> :
    <RouterProvider router={router} />
  )
}

export default App
