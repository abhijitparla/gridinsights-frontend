import React from 'react'

const GetStarted = () => {
  return (
    <div className='flex justify-center flex-col p-5 bg-gradient-to-br from-green-600 to-blue-600'>
      <h1 className='text-4xl text-center font-semibold m-5 text-slate-100 mt-16'>Get Started Today</h1>
      <p className='text-center m-3 text-slate-100 text-lg max-w-3xl self-center'>It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive.</p>
      <button className='bg-slate-100 max-w-3xl self-center p-3 pl-10 pr-10 text-blue-600 rounded-xl shadow-xl mb-16 mt-7'>Get 6 months free</button>
    </div>
  )
}

export default GetStarted
