import React from 'react'
import images from '../icon/banner-3.jpg'

export default function Banner() {
  return (
    <>
    <img src={images} alt="" style={{ objectFit: 'cover',width: '100%', height: '20rem',margin:'2rem 0' }}/>
    </>
  );
}
