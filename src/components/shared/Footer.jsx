import React, { useState, useEffect } from 'react';
import { fetchLinksData } from '../../data/api'; // Import the fetchLinksData function
import TextLogo from './TextLogo'; // Import TextLogo component
import Image from 'next/image'; // Import Image component if dealing with Next.js images
import Link from 'next/link';
import instaIcon from '../../../public/icons/Vector.svg';
import faceIcon from '../../../public/icons/Vector-1.svg';
import linkdinIcon from '../../../public/icons/Vector-2.svg';
import xIcon from '../../../public/icons/Vector-3.svg';
import youtubeIcon from '../../../public/icons/Vector-4.svg';


const Footer = () => {
    const logos = [
        {
            id: 1,
            icon: instaIcon,
        },
        {
            id: 2,
            icon: faceIcon,
        }
        ,
        {
            id: 3,
            icon: linkdinIcon,
        },
        {
            id: 4,
            icon: xIcon,
        },
        {
            id: 5,
            icon: youtubeIcon,
        }
    ]
    const [links, setLinks] = useState([]);
    const [isFooter, setFooter] = useState(true);

    useEffect(() => {
        const fetchLinks = async () => {
            const data = await fetchLinksData(); // Call the fetchLinksData function
            if (data) {
                setLinks(data);
            }
        };
        fetchLinks();
    }, []);

    return (
        <footer className='flex flex-col items-center w-full gap-2 pb-5 ' style={{ background: "#212861" }}>
            <div className="w-full">
                <div className="footer flex justify-around items-center py-5 max-w-screen-xl mx-auto">
                    <div className="left w-1/2">
                        <TextLogo isFooter={isFooter} />

                        <div className="links">
                            <ul>
                                {links.map((link, index) => (
                                    <li key={index} className=' flex flex-row items-center py-5'>
                                        <span>
                                            <Image  alt='img'  src={link.icon} width={18} height={18} />
                                        </span>
                                        <Link key={index} href={link.url} className="mr-8 px-2 text-white ">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="right py-5 w-1/2 text-white flex flex-col gap-14 justify-center items-center">
                        <h1 className='' style={{ fontSize: "30px" }}>Subscribe Our Newsletter</h1>
                        <p className='text-gray-400 text-base'>Don't Miss Our Features Update</p>
                        <div className="form">
                            <input type="email" name="" id="" placeholder='Enter your email' className='px-4 py-2 rounded-tl rounded-bl' />
                            <input type="button" value="Subscribe" className="py-2 px-4 rounded-tr rounded-br text-white font-semibold bg-blue-700 focus:outline-none" />
                        </div>
                        <div className="social">
                            <ul className=' flex flex-row items-center gap-5'>
                                {logos.map((logo, index) => (
                                    <li key={index}><Image  alt='img'  src={logo.icon} width={25} height={24} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyRight text-white">
                <h4>CopyRight @ 2024</h4>
            </div>
        </footer>
    );
};

export default Footer;
