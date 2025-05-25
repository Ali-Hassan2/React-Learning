import React, { useState } from 'react'
import cross from '../assets/cross.png'
import circle from '../assets/circle.png'
import './TicTac.css'
const TicTac = () => {

    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false)

    let data = ["","","","","","","","",""]

    const clickHandle = (e,num) => {
        if(lock){
            return ;
        }
        if (data[num] !== "") {
            // Prevent overriding a previously clicked box
            return;
        }
        if(count % 2 === 0){
            e.target.innerHTML = `<img src='${cross}'>`;
            data[num] = "x";
            setCount(count+1) 
        }
        else{
            e.target.innerHTML = `<img src='${circle}'>`;
            data[num] = "o"
            setCount(count+1)
         }
         checkWin()
    }


    const checkWin = () =>{
        if(data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
            won(data);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data);
        }
        else if(data[0]===data[3] && data[3] === data[6] && data[6] !==""){
            won(data);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7] !== ""){
            won(data);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data);
        }
        else if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data);
        }

    }

    const won = (winner) =>{
        setLock(true);
    }
  return (
   
    <div>
      <div className="container">
        <h1>Tic-Tac Game</h1>
        <div className="board">
            <div className="row">
                <div className="box" onClick={(e)=>{clickHandle(e,1)}}>
                    
                </div>
                <div className="box" onClick={(e)=>{clickHandle(e,2)}}>
                    
                </div>
                <div className="box" onClick={(e)=>{clickHandle(e,3)}}>
                    
                </div>
            </div>
            <div className="row">
                <div className="box" onClick={(e)=>{clickHandle(e,4)}}>
                    
                </div>
                <div className="box" onClick={(e)=>{clickHandle(e,5)}}>
                    
                </div>
                <div className="box" onClick={(e)=>{clickHandle(e,6)}}>
                    
                </div>
            </div>
            <div className="row">
                <div className="box" onClick={(e)=>{clickHandle(e,7)}}>
                    
                </div>
                <div className="box"onClick={(e)=>{clickHandle(e,8)}} >
                    
                </div>
                <div className="box" onClick={(e)=>{clickHandle(e,9)}}>
                    
                </div>
            </div>
        </div>
        <button>Reset</button>
      </div>
    </div>
  )
}

export default TicTac
