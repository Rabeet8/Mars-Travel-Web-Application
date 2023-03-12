import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingComp from '../components/TrainingComp'

function Training() {
  return (
    <div>
        <Navbar/>
        <HeroImage heading = "Lessons" text = 'Train Yourself To Explore Mars'/>
        <TrainingComp/>
        <Footer/>

    </div>
  )
}

export default Training