import React from 'react'
import { quick_links, socials } from '@/constants'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className='border-t border-neutral-700 gap-5 flex max-[425px]:flex-col-reverse items-center mt-20 p-5'>

      <div className='w-1/3 text-center'>

        <p className='text-center'>2024 © Jaya.</p>
      </div>

      <div className='w-full flex max-[425px]:justify-center lg:justify-between justify-around  min-[320px]:items-center max-[425px]:p-5  min-[425px]:p-5 md:px-10 lg:px-40 '>
        <ul className='max-[425px]:hidden flex  flex-col gap-3'>
          <h1>Quicklinks</h1>
          {
            quick_links.map((item) => (
              <li key={item.title}><Link
                href={item.href}
                className='text-neutral-500 hover:text-white '
              >{item.title}
              </Link>
              </li>
            ))
          }
        </ul>

        <ul className='max-[425px]:hidden max-[1024px]:hidden flex  flex-col gap-3'>
          <h1>Quicklinks</h1>
          {
            quick_links.map((item) => (
              <li key={item.title}><Link
                href={item.href}
                className='text-neutral-500 hover:text-white'
              >{item.title}
              </Link>
              </li>
            ))
          }
        </ul>

        <ul className='flex  flex-col gap-3 min-[320px]:items-center'>
          <h1>Contact Me</h1>
          {
            socials.map((item) => (
              <li key={item.title}><Link
                href={item.href}
                target='_blank'
                className='text-neutral-500 hover:text-white'
              >{item.title}
              </Link>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}
