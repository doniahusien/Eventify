import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewsCard = ({ title, description, date, imageUrl, buttonText, buttonColor }) => {
  return (
    <div className='new flex flex-col justify-center items-center bg-slate-600 rounded-tl-full rounded-tr-full rounded-b-2xl' style={{ width: '410px', background: '#F0F0F0' }}>
      <div>
        <Image src={imageUrl} width={410} height={300} />
      </div>
      <div className='details px-5 py-5 flex flex-col gap-5 justify-center text-center'>
        <h1 className='font-bold text-xl'>{title}</h1>
        <p>{description}</p>
        <div className='more flex flex-row justify-between'>
          <div className='flex flex-row items-center gap-2'>
            <Image src='/icons/cal.svg' width={20} height={20} />
            <h5>{date}</h5>
          </div>
          <Link href='/'>
            <button className='font-semibold py-2 px-10' style={{ color: buttonColor }}>
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default NewsCard;
