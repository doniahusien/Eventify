import React from 'react';
import Card from '../UI_shared/Card';
import messageIcon from '../../../public/icons/messageIcon.svg';
import likeIcon from '../../../public/icons/likeIcon.svg';
import camIcon from '../../../public/icons/camIcon.svg';
import lockIcon from '../../../public/icons/lockIcon.svg';

const Benefits = () => {
    const benefits = [
        {
            id: 1,
            benefit: "Privacy",
            icon: lockIcon,
            description: "Eventful moments privacy protected your trust our commitment at explore"
        },
        {
            id: 2,
            benefit: "Secure Payments",
            icon: camIcon,
            description: "where seamless bookings meet ironclad security in every payment",
        },
        {
            id: 3,
            benefit: "24x7 Support",
            icon: messageIcon,
            description: "Support around the clock, ensuring your event journey is always smooth"
        },
        {
            id: 4,
            benefit: "Trust",
            icon: likeIcon,
            description: "Support around the clock, ensuring your event journey is always smooth"
        },
    ];

    return (
        <div className="features flex flex-col justify-center gap-10 py-32 ">
            <h1 className='text-primary-txt pl-32 font-bold' style={{ fontSize: "30px" }}>
                Our <span className='text-custom-hover'>Event Management </span> App Benefits
            </h1>
            <div className="cards_container flex flex-row justify-center items-center bg-white gap-20 w-full">
                {benefits.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        benefit={card.benefit}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Benefits;
