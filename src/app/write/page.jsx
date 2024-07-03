import React from 'react'

const page = () => {
  return (
    <div className='h-screen border border-neutral-700 mt-12 flex justify-center px-52 '>
      <div className='input-data text-7xl w-full bg-pink-300'>
        <input type='text' placeholder='Title' className='w-full outline-none h-52 outline-neutral-700' />
        <input type='text' placeholder='tell your story' className='w-full  outline-none text-lg ' />
      </div>
    </div>
  )
}

export default page
