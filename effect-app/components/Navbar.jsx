import { useEffect, useState } from 'react'
function Navbar({color})
{
    // case1: run on every render
    useEffect(()=>{
        alert("hey i will run on every render")
      })
      // case1: run only on first render
    useEffect(()=>{
        alert("this is the first render")
      },[])
      //case3: run only when certain values chang\
          useEffect(()=>{
        alert("hey i will run on color is changed")
    },[color])
    return(
        <>
        <h1>i am Navbar of {color}</h1>

        </>
    )

}
export default Navbar;