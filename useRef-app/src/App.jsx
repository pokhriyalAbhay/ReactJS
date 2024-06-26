import { useState,useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  let a = useRef(0) // yeh har render par reinilized nahi hoga using useRef hooks
  useEffect(()=>{
   a = a+1 
    a.current = a.current + 1
   console.log(`rendering the value is${a}`); //is waali line ek baar toh value update ho jayegi lekin baad mai nahi hongi
   ///kuynki har update mai component rerender hoga or rerender honge par value reinitialzed hogi 
   console.log(`rendering the value of a is ${a.current}`);
  })
 const btnref = useRef()
 useEffect(()=>{
  console.log("first rendering ");
  btnref.current.style.backgroundColor = "red";
 },[])


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
