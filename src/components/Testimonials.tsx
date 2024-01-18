import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div className='bg-slate-100 flex flex-col justify-center pb-16'>
      <div className='self-center'>
        <h1 className='text-4xl font-semibold p-5 pt-10 max-w-3xl'>Loved by business worldwide.</h1>
      </div>
      <div className='self-center'>
        <h2 className='text-center mb-5 text-lg text-slate-500 max-w-3xl'>Our software is so simple that people cant help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.</h2>
      </div>
      <div className='flex flex-wrap justify-center max-w-4xl self-center'>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
      </div>
    </div>
  )
}

export default Testimonials
