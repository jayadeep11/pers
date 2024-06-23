import React from 'react'

const Contact = () => {
  return (
    <div id='Notes' className='mt-12 flex flex-col lg:flex-row lg:justify-between '>
      <div className='lg:w-1/2 w-full '>
        <h1 className=' text-center lg:text-start md:text-9xl text-6xl lg:text-[12rem] im'>Lets work together</h1>
      </div>
      <div className='lg:w-2/6 border border-neutral-700 rounded-lg flex mt-12 flex-col justify-around gap-5 p-10 lg:px-10 '>
        <div className='flex flex-col gap-5 '>
          <label className='font-bold text-neutral-700'>Name</label>
          <input type='text' className='bg-transparent border-b border-neutral-700 focus:outline-none focus:border-white ' />
          <label className='font-bold text-neutral-700'>email</label>
          <input type='text' className='bg-transparent border-b border-neutral-700 focus:outline-none focus:border-white' />
          <label className='group font-bold text-neutral-700'>mobile</label>
          <input type='text' className='bg-transparent group-focus:text-white  border-b border-neutral-700 focus:outline-none focus:border-white' />
        </div>
        <button className='border border-neutral-700 p-4 rounded-lg hover:bg-white hover:text-black'>Submit</button>
      </div>

    </div >
  )
}

export default Contact



