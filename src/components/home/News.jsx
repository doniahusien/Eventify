import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img from '../../../public/icons/cal.svg';
import image1 from '../../../public/images/news1.png';
import NewsCard from '../UI_shared/NewsCard';
const News = () => {
  const newsData = [
    {
      id: 1,
      title: 'Event & Conference',
      description: 'Manage your meeting room schedule online and let your clients book in for their meetings.',
      date: '02 September 2024',
      imageUrl: image1,
      buttonText: 'Read More',
      buttonColor: '#5669FF'
    },
    {
      id: 2,
      title: 'Another Event',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '10 September 2024',
      imageUrl: image1,
      buttonText: 'Explore',
      buttonColor: '#FF5733'
    },
    {
      id: 3,
      title: 'Another Event',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '10 September 2024',
      imageUrl: image1,
      buttonText: 'Explore',
      buttonColor: '#FF5733'
    }
    
  ];
  return (
    <>
        <div className='flex flex-col gap-5 py-14 overflow-x-auto overflow-y-hidden'>
        <div>
          <h1 className='text-custome-hover font-bold pl-24' style={{ fontSize: "40px" }}>
            <span className='text-custom-hover'>Latest </span>News
          </h1>
        </div>
        <div className='news flex flex-row gap-16 px-5 justify-center'>
        {newsData.map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            description={news.description}
            date={news.date}
            imageUrl={news.imageUrl}
            buttonText={news.buttonText}
            buttonColor={news.buttonColor}
          />
        ))}
        </div>
      </div>
    </>
  );
}

export default News;