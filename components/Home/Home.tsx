import React from 'react'
import Hero from './Hero/Hero'
import Destinations from './Destinations/Destinations'
import Hotel from './Hotel/Hotel'
import Marquees from './Marquee/Marquees'
import AboutUs from './About Us/AboutUs'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <AboutUs />
      <Destinations />
      <Hotel />
      <Marquees />
      <Footer />
    </div>
  )
}

export default Home