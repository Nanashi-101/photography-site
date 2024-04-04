import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen' id='contact'>
      <h1 className='text-center font-bold text-2xl p-4'>Lets Work Together</h1>
      <form action="" className="max-w-[600px] m-auto ">
        <div className="grid grid-cols-2 gap-2">
            <input type="text" placeholder="Name" className="input-style"/>
            <input type="email" placeholder="Email" className="input-style"/>
        </div>
        <input type="text" placeholder='Subject' className='input-style my-3'/>
        <textarea cols="30" rows="10" placeholder="Message" className="input-style"/>
        <Link href='/' className='flex justify-center w-full px-8 py-2 border shadow-lg uppercase hover:tracking-[0.08rem] duration-300 font-semibold'>
          Submit
        </Link>
      </form>
    </div>
  )
}

export default Contact
