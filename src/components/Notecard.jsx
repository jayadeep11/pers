import React from 'react';
import Image from 'next/image';
import logo from "../../public/prop.jpg";

const Notecard = ({ post }) => {
  return (
    <div className='border border-neutral-700 rounded-lg flex hover:bg-neutral-300 hover:text-black transition-all justify-between p-5 '>
      <div className='lg:w-2/3 md:w-2/3 w-full  p-5 flex flex-col gap-5 justify-center items-start' >
        <h1 className='font-bold text-2xl font-acorn'>{post.heading}</h1>
        <p className="text-sm font-normal">{post.subheading}</p>
      </div>
      <div className='max-[425px]:hidden lg:w-2/6 md:w-2/6 p-5  flex justify-end items-center'>
        <Image src={logo} alt='image' className='w-16 h-16 rounded-full max-[425px]:hidden' />
      </div>
    </div>

  )
}

export default Notecard

