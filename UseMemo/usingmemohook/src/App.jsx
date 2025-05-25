import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count,setcount] = useState(0);
  const [number,setnumber] = useState(0);
  // const [result,setresult] = useState("");

  const doubleinputvalue = ( number)=>{

    for(let i = 0; i < 100000000; i++){

    }
    return number * 2;

  }


  const handlecount = () =>{
    setcount(prev => prev + 1);
    console.log("Count br rha hai: ",count)
  }


  // making a expensive opeation
  // so with every state change this function will run always so 
  // this will take so much time

  // so useMemo yhi kehta ek bari mei function run kr k value 8 le li mei hr bari function ko run nhi kru ga
  // hr render pr mei 8 value return kr du ga

  // function doublingvalues(val){
  //   for(let i = 0; i < 1000000000; i++){}
  //   return val * 2;
  // }

  // let normal_val = doublingvalues(4);

  const result = useMemo(()=> {
    const parsed = parseFloat(number);
    if(!isNaN(parsed)){
      return doubleinputvalue(parsed)
    }
    return ''
  },[number])

  // use Memo ek function leta calculation method or sathe dependency k kis k change hone se ye krna hai 
  // to aab agr value same rhe gi to ye already stored wale ko show krwaw de ga agr valye change hogi to nai ajye gi


  const handleinput = (e)=>{
    const value = e.target.value;
    setnumber(value);
    
  }


  return (

    <>

    <h2>Count: {count}</h2>
    <button onClick={handlecount}>Increment</button>
    <input type="text" placeholder='Enter the value' value={number} onChange={handleinput} />
    <p>Normal value is: {result}</p>  
    </>
  )
}

export default App
