import React from 'react'
import '../globals.css'
import Notecard from '@/components/Notecard'
import logo from "../../../public/prop.jpg"
import Link from 'next/link'

const data = [
  { "heading": "Lee", "subheading": "Todhunter" },
  { "heading": "Keven", "subheading": "McCorry" },
  { "heading": "Chiquia", "subheading": "Fennelow" },
  { "heading": "Angelika", "subheading": "Sline" },
  { "heading": "Brandtr", "subheading": "Echelle" },
  { "heading": "Ripley", "subheading": "Wandtke" },
  { "heading": "Cosette", "subheading": "Wellman" },
  { "heading": "Morten", "subheading": "Ibotson" },
  { "heading": "Sammie", "subheading": "Bantham" },
  { "heading": "Gauthier", "subheading": "Rottenbury" }
]

const Notes = () => {
  return (
    <div id='Notes' className='mt-32 flex items-center justify-center flex-col gap-20'>
      <h1 className=' text-center md:text-9xl text-7xl lg:text-9xl im'>Notes.</h1>
      <div className='lg:w-[475px] md:w-[475px] md:text-3xl text-sm lg:text-4xl flex text-md items-start justify-center text-center'>
        <p className='text-xl '>Some thoughts, reflections, & notes on design and development, along with some latest work in progress.</p>
      </div>

      <div className='flex flex-col gap-5 w-full '>
        {
          data.map((note) => (
            <Notecard Heading={note.heading} subHeading={note.subheading} />
          ))
        }
      </div>
    </div >
  )
}

export default Notes


