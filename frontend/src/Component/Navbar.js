import React from 'react'
import Profile from "../Assets/A.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <div className='nav_container'>
        <img src={Profile} className='image-profile'/>
        <Link to="/Login"><p>login</p></Link>
        <p>admin</p>
      </div>
    </div>
  )
}

export default Navbar
