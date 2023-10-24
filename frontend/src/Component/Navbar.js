import React from 'react'
import Profile from "../Assets/A.png"
import "./Navbar.css"
function Navbar() {
  return (
    <div>
      <div className='nav_container'>
        <img src={Profile} className='image-profile'/>
        <p>login</p>
        <p>admin</p>
      </div>
    </div>
  )
}

export default Navbar
