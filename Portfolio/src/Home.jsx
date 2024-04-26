import './App.css'
import imgMine from "./assets/omg-mine.jpeg"
import React from 'react'

export const Home = () => {
  return (<>
  <div className="home">
  <div className='info'>
    <h3>Hello, I am Omendra,</h3>
    <h1 className="Developer">Full stack</h1> 
    <h1 className="Developer">Developer</h1>
  </div>
    <div>
        <img src={imgMine}/>
    </div>
  </div>
  </>
  )
}


