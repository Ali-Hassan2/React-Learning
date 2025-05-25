
import './App.css'
import {React,useEffect,useRef,useState} from 'react'

function App() {

  // useRed k 2 uses hain A and B 
  // A wala ka mtlb hai k normal variable apni value ko presist kre bagair es baat ko nazr mei rakhe k 
  // render horha ya nhi ye value ko change krta rhe ga 
  // But A is not the primary use Case of the useRef

  // B kisi b element ko dirct DOM se uski value ko change krna dekho agr merer pass 2 buttons hain or mei chahhta hn
  //  k ek button se dusre button ka background color ya any property change kr do to mei button 1 ka reference
  // bna lu ga or or us reference ko button 2 mei use kr lu ga


  const [count,setcount] = useState(0);

  const btn1ref = useRef();



  // jb b state variable change hota to page dubara render hota 
  // to check k page render ho rha k ni you can use the useEffect without passing any dependencies

  useEffect(()=>{
    console.log("Page render hogya hai")
  })

  // dekho agr mei ek normal varaibel bnao 

    // So use UseRef() this -> will return an object in which there is a field named as current this current 
    // will hold the value
  // let normal = 1;

  let normal = useRef(0);  // as this will return a object and inside the object there is a fieldd named as 
  // current and in this there is value and it does not care wheather the page rerender or not it will always
  // presist value

  const handlecount = () =>{

    // mei normal ko b increment krta hn
    // normal = normal + 1;
    normal.current = normal.current + 1;
    console.log("The value of normal variable is: ",normal.current)
    // This will always to becaause at initial the value of normal is 1 and when 
    // i click the button value become to and page rerender then again the value of 
    // normal variable become 1 and afer the button click it increments one so always there 
    // will be value = 2
    setcount(count + 1);
  }


  function changeColor(){

    btn1ref.current.style.backgroundColor = "red"
  }


  return (
    <div>
      Hello, Ali
      <br />
      <button onClick={handlecount}>Count: {count}</button>
      <br />
      <button ref={btn1ref}>
        Experimental Button
      </button>
      {/* bss ese reference add krdo or phr koi getelement wagera krne ki zrurat e ni or es reference ko use krlo
      button 2 mei  */}
      <br />
      <button onClick={changeColor}>
        Experiment krne wala button
      </button>
    </div>
  )
}

export default App
