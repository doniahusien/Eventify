import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const RecentActivity = ({ authorName, imageSrc, activityText }) => {
    return (
        <>
            <div className='flex flex-row gap-8 justify-center'>
                <div>
                    <Image src={imageSrc} alt="Author" width={75} height={75} />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold'>{authorName}</h1>
                    <p className='text-l'>{activityText}</p>
                </div>
            </div>
        </>
    );
};

RecentActivity.propTypes = {
    authorName: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    activityText: PropTypes.string.isRequired,
};

export default RecentActivity;
