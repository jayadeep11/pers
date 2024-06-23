import React from 'react'
import '../globals.css'
import Notecard from '@/components/Notecard'
import logo from "../../../public/prop.jpg"

const Notes = () => {
  return (
    <div id='Notes' className='mt-32 flex items-center justify-center flex-col gap-20'>
      <h1 className=' text-center md:text-9xl text-7xl lg:text-9xl im'>Notes.</h1>
      <div className='lg:w-[475px] md:w-[475px] md:text-3xl text-sm lg:text-4xl flex text-md items-start justify-center text-center'>
        <p className='text-xl '>Some thoughts, reflections, & notes on design and development, along with some latest work in progress.</p>
      </div>
      <Notecard />
    </div >
  )
}

export default Notes


