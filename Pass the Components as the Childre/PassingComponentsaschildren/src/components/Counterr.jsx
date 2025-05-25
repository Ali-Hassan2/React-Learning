import React from 'react'
import { useState } from 'react'

const Counterr = (props) => {


  return (
    <div>
        <button onClick={props.increment}>{props.text}</button>
        
        <div>
          {props.children}
        </div>
    </div>
  )
}

export default Counterr
