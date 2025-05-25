import React from 'react'

const Button = () => {

    function ClickHandle(){
        alert("Hello g")
    }
    function changeHandle(){
        alert("Han likh rha")
    }

    function mouseOverHandle(event){
        event.target.style.color = "red"
    }
  return (
    <div>
      <button onClick={ClickHandle}>Click Me</button>

      <form action="">
        <input type="text" onChange={changeHandle}/>

        <p onMouseOver={mouseOverHandle}> Hello g mei hover wala hn</p>
      </form>
    </div>
  )
}

export default Button
