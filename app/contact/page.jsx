import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Contact me' message='Lets connect to talk more. Please fill out the form below' option='Contact me' idScroll='#contact'/>
      <Contact />
      <Footer />
    </div>
  )
}

export default page
