import React from 'react'
import { useState } from 'react'

const counter = () => {
    const [count,SetCount] = useState(0);
  return (
    <div>
      <div className="container">
        <p>The current timer is: {count}</p>
        <button onClick={()=>{
          SetCount(count+1)
        }}>Click me</button>
      </div>
    </div>
  )
}

export default counter
