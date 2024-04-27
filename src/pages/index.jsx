import Header from "@/components/home/Header";
import Benefits from "@/components/home/Benefits";
import Features from "@/components/home/Features";
import Tesimonial from "@/components/home/Tesimonial";
import News from "@/components/home/News";
import React from 'react'


export default function Home() { 
  return (
    <>
      <div >
        <Header />
        <Benefits />
        <Features />
        <Tesimonial />
        <News />
      </div>
    </>
  )
}
