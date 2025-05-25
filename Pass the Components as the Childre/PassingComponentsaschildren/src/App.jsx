
import React from 'react'
import './App.css'
import Naame from './components/Naame'
import Counterr from './components/Counterr'
import { useState } from 'react'
function App() {
  
  const [count,SetCount] = useState(0);

  function handleClick(){
    SetCount(count+1);
  }
  return (
    <div>
      
        <Naame name="Ali Hassan" des="Very good"/>

        {/* I want to print this */}
        <Naame>
          {/*  I can print the any text 
              I can print the any element of HTML
             I can print multiple elements 
            I can do any thing*/}

            <h1>My name is Ali Hassan Waris</h1>
            <span>Bro this is the Span</span>
        </Naame>

        {/* Passing the function as the props */}
        <Counterr increment={handleClick} text="Click me">
          <h1>{count}</h1>
        </Counterr>
       
    </div>
  )
}

export default App
