import './App.css'
import React from 'react'
import {Link, NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Home } from './Home'
import AboutMe from './AboutMe';
import {Work} from './Work.jsx';
import Contactme from './Contactme';


export const NavBar = () => {
  return (
  <>
  <div className="div-main">
    <div className="name">Omendra</div>
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

