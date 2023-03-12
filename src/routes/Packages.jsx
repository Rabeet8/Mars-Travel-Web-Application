import React from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import PackagesCard from '../components/PackagesCard';



function Packages() {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='Mars Travel' text='Choose your trip'/>
        <PackagesCard/>
        <Footer/>

        

    </div>
  )
}

export default Packages;