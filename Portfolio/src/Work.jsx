import './Work.css'
import React from 'react'
import project1 from './assets/project1.png'
import project2 from './assets/Gemini.gif'
import project3 from './assets/sportify.png'

export const Work = () => {
  return (<>
       <div className='projects'>
       <h3>Projects</h3>
       </div>
    <div className="project">
      <div className='img-cards'>
          <img src={project1}  />
      </div>
      <div className='info-cards'>
        <h3>ICETTA-Website</h3>
        <h3>Git Hub Link :- <a href="https://github.com/ome2604/ICETTA-Website">ICETTA-Website</a></h3>
      </div>
    </div>
    <div className="project">
      <div className='img-cards'>
          <img src={project2}  />
      </div>
      <div className='info-cards'>
        <h3>Gemini-Clone</h3>
        <h3>Git Hub Link :- <a href="https://github.com/ome2604/Gemini-Clone">Gemini-Clone</a></h3>
      </div>
    </div>
    <div className="project">
      <div className='img-cards'>
          <img src={project3}  />
      </div>
      <div className='info-cards'>
        <h3>Sportify-clone</h3>
        <h3>Git Hub Link :- <a href="https://github.com/ome2604/Spotify-clone">ICETTA-Website</a></h3>
      </div>
    </div>
    </>
  )
}

export default Work;