import React from 'react'
import TextLogo from './TextLogo'
import icon from '../../../public/icons/notification.svg'
import imgURL from '../../../public/images/profile.svg'
import Image from 'next/image'
const UserNav = () => {
    return (
        <>
            <div className='flex flex-row justify-around items-center px-10 py-10'>
                <TextLogo />
                <input type="search" name="search" id="" placeholder='search for Events' style={{background:"#E8E8E8",borderRadius:"10px",width:"450px",padding:"5px 15px"}}/>
                <div className='flex flex-row space-x-5 items-center'>
                    <Image src={icon} alt="image" width={20} height={20} />
                    <div className='flex flex-col items-center'>
                        <Image src={imgURL} alt="image" width={30} height={30} />
                        <p>Youssef</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default UserNav