import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='My Work' message='Capturing moments, crafting memories ~ "one click at a time". Come have a look!' option='See more' idScroll='#portfolio'/>
      <Portfolio/>
    </div>
  )
}

export default page
