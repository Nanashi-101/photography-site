import React from 'react'
import img1 from '../public/images/ig_image1.jpg';
import img2 from '../public/images/ig_image2.jpg';
import img3 from '../public/images/ig_image3.jpg';
import img4 from '../public/images/ig_image4.jpg';
import img5 from '../public/images/ig_image5.jpg';
import img6 from '../public/images/ig_image6.jpg';
import { AiFillInstagram } from 'react-icons/ai';
import InstaImage from './instaImage';

//Todo: Replace the images 1,2 and 5 from the github of the creator

const instagram = () => {
//   const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold '>Follow Me On Instagram</p>
      <p className='flex justify-center items-center gap-2 pt-2 pb-4 text-lg font-semibold'>@NeX._.Cap</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        <InstaImage socialImage={img1}/>
        <InstaImage socialImage={img2}/>
        <InstaImage socialImage={img3}/>
        <InstaImage socialImage={img4}/>
        <InstaImage socialImage={img5}/>
        <InstaImage socialImage={img6}/>
      </div>
    </div>
  )
}

export default instagram
