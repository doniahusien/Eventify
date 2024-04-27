// In your page component (e.g., pages/index.js)
import React from 'react';
import EventPost from '@/components/UI_shared/EventPost';
import Dashboard from '@/components/shared/Dashboard';
import img from '../../../public/images/eventone.png'
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/events');
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { events: data.events }, // Pass events data as props
  };
}

const Index = ({ events }) => {
  return (
    <div className="flex w-full">
      <div className="bg-gray-200 flex p-5">
        <Dashboard />
      </div>
      <div className='w-full pb-10'>
        <div className='events flex flex-col gap-10 justify-center items-center'>
          {events.map((event, index) => (
            <EventPost key={index} {...event} imageUrl={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
