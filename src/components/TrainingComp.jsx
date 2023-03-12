import React from 'react'
import './TrainingComp.css'
import { Link } from 'react-router-dom'
import Mars from '../assets/Mars.jpeg'
import Mars1 from '../assets/Mars1.jpeg'
import Mars2 from '../assets/Mars2.jpeg'


function TrainingComp() {
  return (
    <div className='training'>
        <div className="left">
            <h1>Training</h1>
            <p>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit. Numquam
              tempore iste dolor quidem </p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Mars} className='img'/>
                </div>
                <div className="img-stack bottom">
                    <img src={Mars1} className='img'/>
                </div>
                <div className="img-stack bottom2">
                    <img src={Mars2} className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrainingComp