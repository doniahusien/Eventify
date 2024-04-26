import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const EventPost = ({ author, content, imageUrl, icons }) => {
    return (

        <div className='event flex flex-col gap-3 justify-center items-start p-10 bg-slate-100'>
            <div className='flex flex-row gap-2'>
                <Image src={author.image} alt="Author" width={30} height={25} />
                <span>{author.name}</span>
            </div>
            <div className='flex flex-col gap-5 justify-center items-center'>
                <h1>{content}</h1>
                <div className='flex justify-center'>
                    <Image src={imageUrl} alt="Event" width={800} height={500} />
                </div>
            </div>
            <div className='flex flex-row gap-5'>
                {icons.map((icon, index) => (
                    <Image key={index} src={icon} alt="icon" width={25} height={25} />
                ))}
            </div>
        </div>

    );
};

EventPost.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }),
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    icons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EventPost;
