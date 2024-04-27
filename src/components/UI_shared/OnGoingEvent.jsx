import React from 'react'
import img from '../../../public/images/eventinfo.png'
import Image from 'next/image'
const OnGoingEvent = () => {
    return (
        <>
            <div style={{width:"250px"}}>
                <div className='flex flex-col gap-5 shadow-xl p-5 '>
                <div>
                    <Image src={img} width={350} height={450}  alt='img' />
                </div>
                <h1>National seminar</h1>
                <h4>19 December 2024</h4>
                <div className='flex flex-row justify-between'>
                    <button className=' text-slate-100 bg-blue-600 px-5 py-2 rounded-full'>32 Member</button>
                    <div className='flex flex-row'>

                    </div>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default OnGoingEvent