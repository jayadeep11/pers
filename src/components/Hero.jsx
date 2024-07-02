import React from 'react'
import '../app/globals.css'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div id='Hero' className="mt-32 flex flex-col items-center justify-evenly">
      <h1 className={`text-center md:text-9xl text-6xl max-[425px]:mt-24 max-[425px]:text-6xl max-[768px]:text-8xl lg:text-9xl`}>im Jayadeep</h1>
      <p className='text-center mt-5 text-neutral-500 hover:text-white transition-all'>Web developer</p>
      <div className="flex  justify-center my-10 flex-wrap gap-5 mt-40">
        <Link href="https://github.com/jayadeep11/" target="_blank" className="text-white transition-all hover:text-orange-500"><FaGithub className="w-8  h-8" /></Link>
        <Link href="https://www.linkedin.com/in/jayadeep11/" target="_blank" className="text-white transition-all hover:text-orange-500"><FaLinkedin className="w-8  h-8" /></Link>
        <Link href="https://www.instagram.com/jayadeep__11/" target="_blank" className="text-white transition-all hover:text-orange-500"><FaInstagram className="w-8  h-8" /></Link>
        <Link href="https://www.instagram.com/jayadeep__11/" target="_blank" className="text-white transition-all hover:text-orange-500"><FaTwitter className="w-8  h-8" /></Link>
      </div>
    </div >
  )
}

export default Hero

