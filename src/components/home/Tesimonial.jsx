import React from 'react';
import HeaderUi from '../UI_shared/HeaderUi';
import img from '../../../public/images/gallery.png';

const Tesimonial = () => {
  return (
    <>
      <div className='py-16'>
      <HeaderUi
        title="Our Customer Testimonial"
        description="i’ve tried numerous event app , but explore is a game - changer ! the intuitive interface , real time ubdates and seamless communicationfeatures have simplified my event planning process . it’s now my go-to app for every occasion"
        buttonLink="/create-event"
        imageUrl={img}
          imageAlt="Image 1"
        headline2={"true"}
    />
      </div>
      
    </>
  )
}

export default Tesimonial