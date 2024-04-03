import { AboutMe } from './AboutMe'
import './App.css'
import { Home } from './Home'
import { NavBar } from './NavBar'
import { Route, Routes } from 'react-router-dom'
import { Contactme } from './Contactme'
import Work from './Work'
import { Footer } from './Footer'


function App() {

  return (
    <>
    <div className="main">
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Work/>
      <Contactme/>
      <Footer/>
    </div>
    </>
  )
}

export default App
