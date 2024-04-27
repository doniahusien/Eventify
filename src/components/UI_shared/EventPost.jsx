import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'; // Import the useRouter hook

const EventPost = ({ event_id, organizer_name, organizer_email, organizer_image, content, imageUrl }) => {
  const icons = ['/icons/heart2.svg', '/icons/star2.svg', '/icons/chat2.svg'];
  const router = useRouter(); 

  const handleClick = () => {
    router.push(`/event/${event_id}`);
  };

  return (
    <div className='event flex flex-col gap-3 justify-center items-start p-10 bg-slate-100'>
      <div className='flex flex-row gap-2'>
        <Image src={imageUrl} alt="Organizer" width={30} height={25} />
        <span>{organizer_name}</span>
      </div>
      <div className='flex flex-col gap-5 justify-center items-center'>
        <h1>{content}</h1>
        <div className='flex justify-center'>
          <Image src={imageUrl} alt="Event" width={800} height={500} />
        </div>
      </div>
      <div className='flex flex-row gap-5'>
        {icons && icons.map((icon, index) => (
          <Image key={index} src={icon} alt="icon" width={25} height={25} />
        ))}
        <button onClick={handleClick}>Go to Event details</button> 
      </div>
    </div>
  );
};

EventPost.propTypes = {
  event_id: PropTypes.number.isRequired,
  organizer_name: PropTypes.string.isRequired,
  organizer_email: PropTypes.string.isRequired,
  organizer_image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string), // Make icons prop optional
};

export default EventPost;
