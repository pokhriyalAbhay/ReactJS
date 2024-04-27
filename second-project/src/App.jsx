import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter , setcounter] = useState(15)
  //let counter = 15
  const addvalue = () =>
  {
   // console.log("random value", counter)
    // yeh karne par console mai tho counter variable update ho raha hain but UI updation
    if(counter<20)
    {
      counter = counter+1
    setcounter(counter)// ke karan aasa hota hain UI updation ko react control karta hain , ek jagah update ho kar har jaagh react
    }// karti hain example jaise hmne yaha pe bhut saare counter variable bana dye hote tho yeh situation 
    // aati
    
  }
const removevalue = () =>
{
  if(counter>0)
  {
  setcounter(counter-1)
  }
 
}
  

  return (
    <>
        <h1>hello i am there remove and sum to value :{counter} </h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}>Add value : {counter}</button>
      <br/>
      <button onClick={removevalue}>remove value :{counter}</button>
      
    </>
  )
}

export default App
