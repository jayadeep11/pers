import React from 'react';
import Image from 'next/image';
import logo from "../../public/prop.jpg";

const Notecard = () => {
  return (
    <div className='border border-neutral-700 rounded-lg flex justify-between lg:p-10 md:p-10 p-5  items-center  w-full'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Notes.</h1>
        <p className="font-thin">this something that i do not from anywhere</p>
      </div>
      <div>
        <Image src={logo} alt='image' className='w-24 h-24 rounded-full max-[425px]:hidden' />
      </div>
    </div>
  )
}

export default Notecard

