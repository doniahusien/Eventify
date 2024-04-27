// pages/events/[id].jsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook
import eventX from '../../../public/images/eventone.png'
import user from '../../../public/images/user.svg'
import Image from 'next/image';
import GPS from '../../../public/icons/locationGps.svg'
import clock from '../../../public/icons/clock.svg'
const EventDetails = () => { const router = useRouter();
  const { id } = router.query; // Retrieve the event ID from the router query
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch event details based on the event ID
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`/api/events/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event details');
        }
        const eventData = await response.json();
        setEvent(eventData.event);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (id) {
      fetchEventDetails();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  // Format the date string
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className='flex flex-col justify-center items-center w-full p-10'style={{height:"700px"}}>
      <div className=' flex flex-col justify-end items-end bg-slate-300 rounded-lg p-5'>
      <div className='flex flex-row gap-5 justify-center items-center  h-full px-10 py-5 w-full'style={{height:"350px"}} >
        <div className='flex flex-row pt-7 'style={{height:"380px",width:"500px"}}>
          <Image src={eventX} width={500} height={850} alt='img'  />
        </div>

        <div className='flex flex-col gap-10'>
            <h1 className=' text-4xl'>{event.name}</h1>
          <div className='flex flex-row gap-4'>
            <Image src={user} width={35} height={25}   alt='img' />
            <div className='flex flex-col gap-1' >
              <h1>{event.organizer_name }</h1>
              <p>organizer</p>
            </div>
          </div>
          <div className='flex flex-row gap-4'>
            <Image src={clock} width={20} height={20}  alt='img'  />
            <h1>{formattedDate}</h1>
          </div>
          <div className='flex flex-row gap-4'>
            <Image src={GPS} width={20} height={20}  alt='img'  />
              <h1>{event.location }</h1>
          </div>
        </div>
      </div>
      <div>
        <button className=' bg-blue-700 text-white rounded-full px-7 py-2'>
          Book Now
        </button>
      </div>

    </div></div>
   
  );
};

export default EventDetails;
