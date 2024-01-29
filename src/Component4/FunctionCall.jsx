import React, { useState } from 'react'

export default function FunctionCall() {

  const[count,setcount]=useState(0)
  
  function handlechenge() {
    setcount(count + 1)
   }
  return (
    <div>
        <h1 className='text-center text-danger '>FunctionCall</h1>
        <p>count:{count}</p>
        <button onClick={handlechenge}>add</button>
         
        
    </div>
  )
}