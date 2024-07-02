"use client"
import React from 'react'
import { FaCircleXmark } from "react-icons/fa6";
import { data } from '@/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import logo from "../../public/prop.jpg";
import Image from 'next/image';

const Note = () => {

  const posts = data
  const heading = usePathname()

  return (
    <div className='mt-12 w-full gap-10 rounded-lg border border-neutral-700 h-[300vh] justify-end  flex flex-row  p-5' >
      <div className='flex justify-between w-full'>
        <Image src={logo} alt='image' className='w-16 h-16 rounded-full max-[425px]:hidden' />
        <h1 className='font-bold text-3xl'>
          {heading.slice(7)}
        </h1>
        <Link href="/notes"><FaCircleXmark className=' w-4 h-4' /></Link>
      </div>
    </div >
  )
}

export default Note
