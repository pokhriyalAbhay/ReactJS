import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("harry")
  const[form,setFrom]=useState({email:"",phone:""})

  const handleclick = () => {
    alert("alert alert alert")
  }
  const handleMouse = () => {
    alert("mouse hover on display")
  }
  const handlechange = (e) => {
    setFrom({...form,[e.target.name]:e.target.value})
    console.log(form);
  }

  return (
    <>
      <div className="button">
        <button onClick={handleclick}>click me</button>
      </div>
      <div className="red">
        <button onMouseOver={handleMouse}>mouse hover</button>
      </div>
      <input type='text' name='email' value={form.email} onChange={handlechange}/>
      <input type='text' name='phone' value={form.phone} onChange={handlechange}/>
    </>
  )
}
export default App
