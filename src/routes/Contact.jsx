import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Form from '../components/Form'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
        <Navbar/>
        <HeroImage heading="Contact" text="Contact Mars Travel"/>
        <Form/>
        <Footer/>

    </div>
  )
}

export default Contact