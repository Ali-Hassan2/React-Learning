import React from 'react'

const Card = (props) => {
  return (
    <div>

      <input type="text" onChange={(e)=>{
        props.setName(e.target.value)
      }} />
      <p>The value of the name is: {props.name}</p>
    </div>
  )
}

export default Card
