import React from 'react'
import call from '../../../public/icons/call.svg'
import message from '../../../public/icons/message.svg'
import faceIcon from '../../../public/icons/Vector-1.svg'

import Image from 'next/image'
const ContactInfo = () => {
    const dataInfo = [
        {
            id: 1,
            icon: call,
            desc: "+548554487-58989"
        },
        {
            id: 2,
            icon: message,
            desc: "eventify@gmail.com"
        },
        {
            id: 3,
            icon: faceIcon,
            desc: "eventify@Yahoo.com"
        },
    ]
    return (
        <div>
            <div className="p-16 space-y-16 flex flex-col items-center justify-center gap-4 text-white">
                <h1 className=' text-4xl'>Contact us </h1>
                <ul className='flex flex-col justify-center align center space-y-10'>
                    {dataInfo.map((item, index) => (
                        <li key={index} className='flex flex-row gap-5 '>
                            <Image src={item.icon} width={20} height={20} />
                            <p>{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ContactInfo