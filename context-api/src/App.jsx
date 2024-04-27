import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>NOW we are learning about the context</h1>
      <Login></Login>
      <Profile/>
      
    </UserContextProvider>
  )
}

export default App;
// ab iske ander jo bhi component banyenge usko access milega 
// yaha do component import karne hian aur wo comopoent kaise data accesss karenge wo hmmne component ke ander hi handle kar diya hain 