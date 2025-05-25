
import { useState } from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
import './App.css'

function App() {
 
  const [Log,checklog] = useState(true)

  if(!Log){
    return(
      <>
      <h2>Welcome to ALi if the value of Log is true means it is loged in and the logout button should be shown here.</h2>

      <Login/>
      </>
    )
  }


  return(

    <>
    <h2>Welcome to ALi if the value of Log is true means it is loged in and the logout button should be shown here.</h2>
    <div>
      {Log && <Logout/>}
      
    </div>
    </>
  )
  // if(Log){
  //   return(
  //     <Logout/>
  //   )
  // }
  // else{
  //   return(
  //     <Login/>
  //   )
  // }
  return (
    <> 
        <div>
          {Log ? <Logout/>:<Login/>}
        </div>
    </>
  )
}

export default App
