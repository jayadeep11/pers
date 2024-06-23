import React from 'react'
import '../globals.css'
import Notecard from '@/components/Notecard'
import logo from "../../../public/prop.jpg"
import Link from 'next/link'


const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if (!res.ok) {
    throw new Error("something went wrong")
  }
  return res.json()
}

const data = [
  { "heading": "gh_command", "subheading": "This script helps you quickly open various GitHub pages in your browser. " },
  { "heading": "gh_command", "subheading": "This script helps you quickly open various GitHub pages in your browser. " },
  { "heading": "gh_command", "subheading": "This script helps you quickly open various GitHub pages in your browser. " },
  { "heading": "gh_command", "subheading": "This script helps you quickly open various GitHub pages in your browser. " },
  { "heading": "gh_command", "subheading": "This script helps you quickly open various GitHub pages in your browser. " },
  { "heading": "gh_command", "subheading": "This script helps you quickly open various GitHub pages in your browser. " },
]

const Notes = async () => {

  const posts = data

  return (
    <div id='Notes' className='mt-32 flex items-center justify-center flex-col gap-10'>
      <h1 className=' text-center md:text-9xl text-7xl lg:text-9xl im'>Notes.</h1>
      <div className='lg:w-[475px] md:w-[475px] md:text-3xl text-sm lg:text-4xl flex text-md items-start justify-center text-center'>
        <p className='text-xl '>Some thoughts, reflections, & notes on design and development, along with some latest work in progress.</p>
      </div>

      <div className='flex flex-col gap-5 w-full lg:px-40 md:px-40 sm:px-14 '>
        {
          posts.map((post) => (
            <Notecard key={post.heading} post={post} />
          ))
        }
      </div>
    </div >
  )
}

export default Notes


