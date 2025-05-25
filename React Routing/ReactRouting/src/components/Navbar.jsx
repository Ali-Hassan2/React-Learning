import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

      <div>
            <h2>Ali's Site</h2>
            <div className="content">
                <Link to="/">Home</Link>
                <Link to="/about">Aboyt</Link>
                <Link to="/ContactUs">Contact Us</Link>

            </div>
      </div>
    </div>
  )
}

export default Navbar
