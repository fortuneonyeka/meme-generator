import React from 'react'
import logo from "../images/meme-logo.jpeg"


const NavBar = () => {
  return (
    <div>
      <nav className = "nav">
        <div>
        <img className="logo" src={logo}/>
        <h3 className="intro">Meme Generator</h3>
        </div>
        <h4 className="project-3">React Course - Project 3</h4>
        </nav>
    </div>
  )
}

export default NavBar