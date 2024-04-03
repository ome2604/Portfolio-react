import './App.css'
import React from 'react'
import {Link, NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Home } from './Home'
import AboutMe from './AboutMe';
import Work from './Work';
import Contactme from './Contactme';



export const NavBar = () => {
  return (
  <>
  <div className="div-main">
    <div className="name">Omendra</div>
    <div className="nav-links">
        <li><NavLink to="/" onClick={<Home/>}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={<AboutMe/>}>AboutMe</NavLink></li>
        <li><NavLink to="/work" onClick={<Work/>}>Work</NavLink></li>
        <li><NavLink to="/contact" onClick={<Contactme/>}>Contact-Me</NavLink></li>
    </div>
    <div className="git">
    <NavLink to="https://github.com/ome2604">
    <FontAwesomeIcon icon={faGithub}/></NavLink>
    <NavLink to="https://www.linkedin.com/in/omendra-yadav-532a58175/">
    <FontAwesomeIcon icon={faLinkedin} />
    </NavLink>
    </div>
  </div>
  </>
  )
}

