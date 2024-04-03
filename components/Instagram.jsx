import React from 'react'
import img1 from '../public/images/ig_image1.jpg';
import img2 from '../public/images/ig_image2.jpg';
import img3 from '../public/images/ig_image3.jpg';
import img4 from '../public/images/ig_image4.jpg';
import img5 from '../public/images/ig_image5.jpg';
import img6 from '../public/images/ig_image6.jpg';
import { AiFillInstagram } from 'react-icons/ai';
import InstaImage from './instaImage';

const instagram = () => {
//   const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div>
      <p>Follow Me On Instagram</p>
      <p><AiFillInstagram/>- @NeX._.Cap</p>
      <div>
        <InstaImage socialImage={img1}/>
      </div>
    </div>
  )
}

export default instagram
