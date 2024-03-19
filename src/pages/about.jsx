import React from 'react'
import HeaderUi from '@/components/UI_shared/HeaderUi'
import img from '../../public/images/Ellipse 9.png'
import Story from '@/components/about/Story'
import Numbers from '@/components/about/Numbers'
import Diamond from '@/components/about/Dimond'
const about = () => {
  return (
    <>
      <div className=' space-y-14'>
        <HeaderUi
          title="Events That Transform"
          description="Events have power. The power to connect and inspire.
          When people come together, ideas take root. Relationships are built. Real change happens.In partnership with event planners, hotels, venues, agencies and staging customers, we create and execute thousands of events annually – in person, virtual and hybrid – of any size, at any venue."
          elipse={"true"}
          imageUrl={img}
          imageAlt="Image 1"
        />
        <Story />
        <Diamond />
        <div className=' pb-52 '>
          <Numbers />
        </div>


      </div>
    </>
  )
}

export default about