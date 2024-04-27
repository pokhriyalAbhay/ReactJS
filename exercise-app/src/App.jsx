import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import About from '../components/About'
import User from '../components/User'


function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/></>
    },
    
    {
      path: "/Login",
      element: <><Navbar/><Login/></>
    },
    {
      path: "/About",
      element: <><Navbar/><About/></>
    },
    {
      path: "/User/:username",
      element: <><Navbar/><User/></>
    },
])

  return (
    <>
    
    <RouterProvider router={router}/>
    </>
  )
}

export default App
