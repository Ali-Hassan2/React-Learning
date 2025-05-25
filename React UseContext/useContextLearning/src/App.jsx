import { useState } from 'react'
import { createContext } from 'react'
import FileA from './Components/FileA'
import './App.css'

// 1- Creation of context
const UserContext = createContext();

function App() {

  // delkho lets understand useContext
  // 1- First ek Context bnao
  // 2- Then Jitne b consumers bne ge unko provider mei wrap krdo tak wo saare values ko access kr payein.
  // 3- values pass kro context k through
  // 4- Consumer k andr ja kr values ko context se jo ain hain unko conusem kr lo 

  // dekho agr useContext na hota to agr mei app se File C mei data bhejna tha to pehle mjy A mei bhejna prta
  // then A se B mei then B se C mei aab dekho A or B ko tw zrurat nhi thi us data ki but they got unnecassary data
  // so es sb ko avoid krne k lie hm context ka use krte hain

  const [person,setperson] = useState({name:"Ali Hassan Waris"})


  return (
    <>

    
      <UserContext.Provider value={person}>
        <FileA/>
      </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
