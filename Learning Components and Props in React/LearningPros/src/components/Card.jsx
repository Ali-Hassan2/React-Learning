import React from 'react'
import lion from '../assets/lion.jpg'
import './Card.css'
const Card = (props) => {
  return (
    <div>
        
        
            <div className="card">
                <h2>{props.name}</h2>
                <img src={props.image} alt="Cannot open the picture" />
                <p>{props.des}</p>
            </div>
        </div>
      
    
  )
}



export default Card
