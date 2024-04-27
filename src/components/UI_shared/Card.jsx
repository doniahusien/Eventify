import React from 'react';
import Image from 'next/image';

const Card = ({ icon, benefit, description, justifyCenter }) => {
    return (
        <div className={`card w-64 h-60 flex flex-col justify-center ${justifyCenter ? 'items-center' :'items-start   ' } px-5 gap-4 rounded`} style={{ background: "#F0F0F0" }}>
            <Image src={icon} width={26} height={26}  alt='img' />
            <h4 className='font-bold text-lg text-primary-txt'>{benefit}</h4>
            <p className={`font-semibold text-gray-600 ${justifyCenter ? 'text-center text-sm' :'items-start' }`}>{description}</p>
        </div>
    );
};

export default Card;
