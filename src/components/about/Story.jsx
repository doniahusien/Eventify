import React from 'react';

const Story = () => {
  return (
    <>
      <div className='flex flex-col justify-center gap-5 items-center w-2/3 mx-auto py-8 text-center'>
        <h1 className='font-semibold' style={{ fontSize: "50px" }}>Our <span className=' text-custom-hover'>Story</span></h1>
        <div className='texts text-xl text-center space-y-8' style={{lineHeight:"40px"}}>
          <p>We’ve been creating memorable event experiences that connect and inspire, and engage and transform organizations for decades. With a customer-first mindset and a hospitality focus, we have an unmatched breadth and depth of event production services to support our customers through every step in the event planning. </p>
          <p>In partnership with event planners, hotels, venues, agencies and staging customers, we create and execute thousands of events annually – in person, virtual and hybrid – of any size, at any venue, anywhere in the world. Our core values are embedded in our DNA, and our team members are innovators and collaborators at heart – highly trained experts that intuitively combine creative, production and technology to deliver unparalleled service.</p>
        </div>
      </div>
    </>
  );
}

export default Story;
