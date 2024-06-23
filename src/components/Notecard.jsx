import React from 'react';
import Image from 'next/image';
import logo from "../../public/prop.jpg";

const Notecard = ({ Heading, subHeading }) => {
  return (
    <div className='border border-neutral-700 rounded-lg flex justify-between max-[425px]:justify-center lg:gap-52 lg:p-10 md:p-10 p-5  w-full'>
      <div className='flex flex-col lg:justify-start lg:items-start  justify-center items-center gap-3'>
        <h1 className='text-2xl  md:text-4xl lg:text-4xl font-bold'>{Heading}</h1>
        <p className="text-sm font-normal">{subHeading}</p>
      </div>
      <div>
        <Image src={logo} alt='image' className='w-24 h-24 rounded-full max-[425px]:hidden' />
      </div>
    </div>
  )
}

export default Notecard

