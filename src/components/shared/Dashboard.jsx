import React from 'react'
import { useState , useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fetchDashData } from '@/data/api'
const Dashboard = () => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchDashData(); 
            setLinks(data);
        };
        fetchData();
    }, []);
    return (
        <>
            <ul className='flex flex-col space-y-5'>
                {links.map((link, index) => (
                    <li className="mb-2 flex flex-col justify-center items-center" key={index}>
                    <Link href={link.url} className=" hover:text-custom-hover mb-2 flex flex-col justify-center items-center">
                        <Image src={link.icon} alt="image" width={30} height={25} />
                            <span>{link.name}</span>
                    </Link>
                </li>
                ))}
                
            </ul>
        </>
    )
}

export default Dashboard