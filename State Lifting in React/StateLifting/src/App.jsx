import React, { useState } from 'react';
import './App.css'
import Card from './components/Card'
function App() {

  const [name, setName] = useState('')

  return(
    <>
    {/* <Card name="Ali Hassan"/> */}

    <Card name={name} setName={setName}/>

    <p>I am in the parent an i am changing in the child: {name}</p>
    </>
  )

}

export default App
