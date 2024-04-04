import React from 'react'
// import img1 from '../public/images/ig_image1.jpg';
// import img2 from '../public/images/ig_image2.jpg';
// import img3 from '../public/images/ig_image3.jpg';
// import img4 from '../public/images/ig_image4.jpg';
// import img5 from '../public/images/ig_image5.jpg';
// import img6 from '../public/images/ig_image6.jpg';
import InstaImage from '@/InstaImage';

const instagram = () => {
//   const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold '>Follow Me On Instagram</p>
      <p className='flex justify-center items-center gap-2 pt-2 pb-4 text-lg font-semibold'>@NeX._.Cap</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        <InstaImage socialImage="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <InstaImage socialImage="https://images.unsplash.com/photo-1514923995763-768e52f5af87?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <InstaImage socialImage="https://images.unsplash.com/photo-1522878129833-838a904a0e9e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <InstaImage socialImage="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <InstaImage socialImage="https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <InstaImage socialImage="https://images.unsplash.com/photo-1453747063559-36695c8771bd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
    </div>
  )
}

export default instagram
