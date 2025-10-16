import React from 'react'

type Props = {
  heading: string
}

const SectionHeading = ({heading} : Props) => {
  return (
    <div className='w-[80%] mx-auto mt-10 ml-41'>
       <h1 className='text-xl sm:text-3xl text-blue-950 font-semibold tracking-wider'>{heading}</h1>
    </div>
  )
}

export default SectionHeading