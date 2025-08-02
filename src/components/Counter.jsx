import React from 'react'
import { useState } from 'react'
import '../styles.css'
const Counter = () => {
  const [count, setCount] = useState (0)
    return (
    <div id="container">
        <div>
            <h1 id= 'number'>{count} </h1>
        </div>
        <div className="btns-container">
            <button id='increament' onClick={()=>{setCount(count+1)}}> +</button>
            <button id='increament'  onClick={()=>{setCount(count-1)}}>-</button>
        </div>
    </div>
  )
}

export default Counter