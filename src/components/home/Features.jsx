import React from 'react'
import Card from '../UI_shared/Card'
import feature1 from '../../../public/icons/feature1.svg';
import feature2 from '../../../public/icons/feature2.svg';
import feature3 from '../../../public/icons/feature3.svg';


const Features = () => {
  const features = [
    {
      id: 1,
      feature: "Explore Nearby Event",
      icon: feature1,
      description: "Discover joy around explore nearby events effortlessly"
    },
    {
      id: 2,
      feature: "Live chat & Call",
      icon: feature2,
      description: "Discover joy around corner explore nearby events effortlessly",
    },
    {
      id: 3,
      feature: "View Favourite Event",
      icon: feature3,
      description: "Discover joy around corner explore nearby events effortlessly"
    },
    {
      id: 4,
      feature: "View Favourite Event",
      icon: feature3,
      description: "Discover joy around corner explore nearby events effortlessly"
    },
  ];

  return (
    <>
      <div className="features flex flex-col justify-center gap-10 py-10  bg-primary-txt ">
        <h1 className='text-white pl-32 font-bold' style={{ fontSize: "30px" }}>
          <span className='text-custom-hover'>Key Feature</span> of
          <br />
          Our Event Management App
        </h1>
        <div className="cards_container flex flex-row  justify-center gap-20 w-full">
          {features.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              benefit={card.feature}
              description={card.description}
              justifyCenter={"true"}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Features