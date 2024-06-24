import React from 'react'
import { data } from '@/constants'

const Note = () => {

  const posts = data

  return (
    <div className='mt-12 w-full gap-10 rounded-lg border border-neutral-700 h-screen  flex flex-col items-center p-10' >
      <h1 className='font-bold text-5xl'></h1>
      <div className=' w-10/12 h-[100%]'>
      </div>
    </div >
  )
}

export default Note
