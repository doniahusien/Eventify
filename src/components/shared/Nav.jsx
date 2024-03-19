// src/components/Nav.js

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/images/Group 3.svg';
import styles from '../../styles/navStyle.module.css';
import { fetchLinksData } from '../../data/api'; 

const Nav = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLinksData(); // Call the fetchLinksData function
      setLinks(data);
    };
    fetchData();
  }, []);

  return (
    <nav className={`flex items-center justify-between py-6 px-24 ${styles.nav}`}>
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={140} height={20} />
      </div>

      <div className="flex-grow font-semibold text-lg flex items-center justify-center" style={{ color: "#212861" }}>
        {links.map((link, index) => (
          <Link key={index} href={link.url} className="mr-8 hover:text-custom-hover">
            {link.name}
          </Link>
        ))}
      </div>

      <div>
        <Link href="/login" className="">
          <button className="font-semibold py-2 px-10" style={{ color: "#5669FF" }}>
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
