import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between shadow-lg p-2'>
      <div className='flex'>
        <h1 className='md:ml-5 flex font-extrabold text-2xl bg-gradient-to-tr from-green-600 to-blue-600 bg-clip-text text-transparent items-center'>GRIDINSIGHTS</h1>
      </div>
      <div className='p-2'>
        <button className='md:mr-5 bg-gradient-to-tl from-green-600 to-blue-600 text-slate-50 p-2 rounded-lg'>Get Started today</button>
        {/* <button className='p-2 border-2 ml-2 rounded-lg border-blue-600'>Sign In</button> */}

      </div>
    </div>
  )
}

export default Header
