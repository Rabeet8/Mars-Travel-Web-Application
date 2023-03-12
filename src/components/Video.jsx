import React from 'react'
import './Video.css'
import { Link } from 'react-router-dom'
import MarsVideo from '../assets/MarsVideo.mp4'

function Video() {
  return (
        <div className="hero">
            <video autoPlay loop muted id='video'>
                <source src={MarsVideo} type='video/mp4' />
            </video>
          <div className='content'>
            <h1>Mars Travel</h1>
            <p>Experience the best journey</p>
          
          <div>
          
            <Link to='/training'className='btn btn-dark'>Training</Link>
            <Link to='/contact' className='btn btn-dark'>contact</Link> 

          </div>
        </div>
        </div>
       
    
        
        
  )
}

export default Video