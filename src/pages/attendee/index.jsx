import React from 'react';
import EventPost from '@/components/UI_shared/EventPost';
import Dashboard from '@/components/shared/Dashboard';

const Index = ({ events }) => {
  const eventData = [
    {
      author: {
        name: 'Donia Hussien',
        image: '/images/profile.svg',
      },
      content: 'Discover the best things to do & events in Cairo. explore concerts, meetups, open mics, art shows, music events and a lot more.',
      imageUrl: '/images/eventone.png',
      icons: ['/icons/heart2.svg', '/icons/star2.svg', '/icons/chat2.svg'],
    },
    {
      author: {
        name: 'Donia Hussien',
        image: '/images/profile.svg',
      },
      content: 'Discover the best things to do & events in Cairo. explore concerts, meetups, open mics, art shows, music events and a lot more.',
      imageUrl: '/images/eventone.png',
      icons: ['/icons/heart2.svg', '/icons/star2.svg', '/icons/chat2.svg'],
    },
  ];

  return (
    <div className="flex w-96">
      <div className=" bg-gray-200 flex p-5">
        <Dashboard />
      </div>
      <div className='w-full pb-10'>
        <div className='events flex flex-col gap-10 justify-center items-center'>
          {eventData.map((event, index) => (
            <EventPost key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;



export function getStaticProps() {
  return fetch('http://localhost:3000/api/events')
    .then(res => res.json())
    .then(events => ({ props: { events } }))
    .catch(error => ({ props: { events: [], message: error.message } }))
}