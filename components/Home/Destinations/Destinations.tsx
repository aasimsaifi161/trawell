import React from 'react'
import SectionHeading from '../Helper/SectionHeading'
import EuropeSlider from './EuropeSlider'
import DubaiSlider from './DubaiSlider'

const Destinations = () => {
  return (
    <div className='pb-20 pt-20'>
       <div className='w-[80%] mx-auto'>
        <h1 className='text-xl sm:text-3xl text-center text-sky-800 font-bold mb-5'>Popular Destinations</h1>
       </div>

       <SectionHeading heading='Europe' />
       <div className='my-4 w-[80%] mx-auto'>
        <EuropeSlider />
       </div>

       <SectionHeading heading='Dubai' />
       <div className='my-4 w-[80%] mx-auto'>
        <DubaiSlider />
       </div>
    </div>
  )
}

export default Destinations