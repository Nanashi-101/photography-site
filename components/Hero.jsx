import React from 'react'
import Link from 'next/link'

const Hero = ({heading, message}) => {
  return (
    <div className='hero-div custom-img'>
      {/* Overlay */}
      <div className='overlay'/>
      <div className="p-5 text-white z-[2]">
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='text-xl py-6 max-w-[700px]'>{message}</p>
        <Link href='/' className='flex justify-center w-fit px-8 py-2 border uppercase hover:tracking-[0.08rem] duration-300 font-semibold'>
          Book
        </Link>
      </div>
    </div>
  )
}

export default Hero;