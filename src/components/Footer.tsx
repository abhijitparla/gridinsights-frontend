import { faGithub, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className='m-8'>
      <div>
        <h1 className='text-center text-3xl font-semibold m-4'>GridInsights</h1>
      </div>
      <div className='flex justify-evenly p-5 border-b-2'>
        <div>
            Features
        </div>
        <div>
            Testimonials
        </div>
        <div>
            Pricing
        </div>
      </div>
      <div className='m-6 flex justify-between'>
      <div >
        Copyright @ 2024 GridInsights. All rights reserved.
      </div>
      <div className='flex'>
        <FontAwesomeIcon icon={faLinkedin} className='mr-3 w-6 h-6'/>
        <FontAwesomeIcon icon={faSquareXTwitter}  className='mr-3 w-6 h-6'/>
        <FontAwesomeIcon icon={faGithub} className='mr-3 w-6 h-6'/>
      </div>
      </div>
      
    </div>
  )
}

export default Footer
