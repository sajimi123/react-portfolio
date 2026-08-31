import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>

      <header style={{backgroundColor:'black',color:'bisque'}}>
        <h1>PORTFOLIO</h1>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><a href='/skill'>Skills</a></li>
            <li><a href='/education'>Education</a></li>
            <li><a href='/project'>Project</a></li>
            <li><a href='/contact'>Contact</a></li>
        </ul>
      </header>
    </div>
  )
}
