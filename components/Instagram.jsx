import Image from 'next/image';
import React from 'react';
import { InstagramData } from './instragramData';
import img1 from '../public/img1.jpg';
import img2 from '../public/img2.jpg';
import img3 from '../public/img3.jpg';
import img4 from '../public/img4.jpg';
import img5 from '../public/img5.jpg';

import InstagramImg from './InstagramImg'


const Instagram = ({insta}) => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>Follow me on Instagram</p>
      <p className='pb-4'>@Captur</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
       <InstagramImg socialImg={img1}/>
       <InstagramImg socialImg={img2}/>
       <InstagramImg socialImg={img3}/>
       <InstagramImg socialImg={img4}/>
       <InstagramImg socialImg={img5}/>

      </div>
    </div>
  )
}

export default Instagram