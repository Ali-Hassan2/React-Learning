import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Strip from './components/Strip'
import Table from './components/Table'
import Hobbies from './components/Hobbies'
import Lambitions from './components/Lambitions'
import Sports from './components/Sports'


function App() {
 return(
  <div class="Page1">
    <Navbar/>
    <Strip/>
    <div className="con"><Table/></div>
    <div className="cont"><Hobbies/></div>
    <div className="cont2"><Lambitions/></div>
    <div className="cont3"><Sports/></div>
    

    
  </div>
 )
}

export default App
