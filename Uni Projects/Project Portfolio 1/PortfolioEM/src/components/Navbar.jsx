import React from 'react'
import img from '../assets/one.png'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      
      <div className="nav">
        <div className="leftnav">
            <h2>EMAN Razi</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsam error temporibus asperiores accusantium expedita eum minus sapiente deserunt? Voluptas necessitatibus tempora assumenda pariatur odio fugiat, modi nisi reiciendis, aliquid, accusamus corporis dolor voluptate velit sed magnam consequuntur veritatis rem!</p>
        </div>
        <div className="rightnav">

            <img src={img} alt="img not found" />

        </div>
      </div>
    </div>
  )
}

export default Navbar

