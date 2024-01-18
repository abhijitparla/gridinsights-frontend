import React from 'react'
import ProfilePic from '@/assets/profile.jpeg'
import Image from 'next/image'
const TestimonialCard = () => {
  return (
    <div className='w-60 shadow-3xl bg-white m-5 rounded-lg'>
      <div>
        <p className='p-3'>GridInsights is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.</p>
      </div>
      <div className='flex justify-between'>
        <div className='p-3'>
            <h1 className='mb-1'>Sheryl Berge</h1>
            <p className='text-sm text-slate-500'>CEO at Lynch LLC</p>
        </div>
        <div >
            <Image className='rounded-full w-12 h-12 m-2' src={ProfilePic} alt='profile image of the reviewer' />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard