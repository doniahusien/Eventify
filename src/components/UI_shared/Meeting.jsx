import React from 'react'
import icon from '../../../public/icons/meeting.svg'
import Image from 'next/image'
const Meeting = () => {
  return (
    <div className='p-3 shadow-xl rounded-full flex flex-row gap-5 bg-zinc-100 w-1/2 pl-5 items-center'>
      <div>
        <Image src={icon} width={30} height={30}  alt='img' />
      </div>
      <div className='flex flex-col'>
        <h1 className='font-semibold text-lg text-sky-900'>WorkShop Meeting</h1>
        <div className='flex flex-row gap-5 text-zinc-500'>
          <h2>9 December 2024</h2>
          <h2>20 member</h2>
          <h2>Versus Coffee</h2>
        </div>

      </div>
    </div>
  )
}

export default Meeting