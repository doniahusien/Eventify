import React from 'react'
import HeaderUi from '@/components/UI_shared/HeaderUi'
import img from '../../public/images/eventinfo.png'
import Image from 'next/image'
import GPSIcon from '../../public/icons/gps.svg'
import clockIcon from '../../public/icons/time.svg'
import profile from '../../public/images/profile.svg'
const eventInfo = () => {
  return (
    <>
      <div>
        <div>
          <HeaderUi
            title="Discover Our Events"
            description="Plan your event, register your guests and manage it all on Eventify. With Eventify, you can streamline your event planning process and ensure everything runs smoothly from start to finish."
            imageUrl={img}
            imageAlt="Image 1"
            headline2={"true"}
          />
        </div>


        <div className='news flex flex-col gap-16 px-5 justify-center items-center py-24 space-y-10'>

          <div className='new  flex flex-row justify-center items-center bg-slate-600 w-3/4' style={{ background: '#F0F0F0' }}>
            <div className='h-50'>
              <Image src={img} width={500} height={400}  alt='img'  />
            </div>

            <div className='details py-5 flex flex-col gap-5 justify-center text-start px-5'>
              <h1 className='font-bold text-xl'>Startup Development Idea</h1>
              <p>You are free to download any HTML and CSS from template website. you can use any template for bussiness purposes.</p>

              <div className='more flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center gap-2'>
                  <Image src={profile} width={35} height={35} />
                  <div className='flex flex-col'>
                    <h6>Donia Hussien</h6>
                    <p>Founder</p>
                  </div>
                </div>

                <div className='flex flex-row gap-3 '>
                  <Image src={GPSIcon} width={18} height={18}  alt='img' />
                  <p> 10:00-10:54 Am</p>
                </div>
                <div className='flex flex-row gap-3'>
                  <Image src={clockIcon} width={20} height={20}  alt='img' />
                  <p> 10:00-10:54 Am</p>
                </div>
              </div>
            </div>
          </div>
          <div className='new  flex flex-row justify-center items-center bg-slate-600 w-3/4' style={{ background: '#F0F0F0' }}>
            <div className='h-50'>
              <Image src={img} width={500} height={400} alt='img'  />
            </div>

            <div className='details py-5 flex flex-col gap-5 justify-center text-start px-5'>
              <h1 className='font-bold text-xl'>Startup Development Idea</h1>
              <p>You are free to download any HTML and CSS from template website. you can use any template for bussiness purposes.</p>

              <div className='more flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center gap-2'>
                  <Image src={profile} width={35} height={35}  alt='img'  />
                  <div className='flex flex-col'>
                    <h6>Donia Hussien</h6>
                    <p>Founder</p>
                  </div>
                </div>

                <div className='flex flex-row gap-3 '>
                  <Image src={GPSIcon} width={18} height={18}  alt='img'  />
                  <p> 10:00-10:54 Am</p>
                </div>
                <div className='flex flex-row gap-3'>
                  <Image src={clockIcon} width={20} height={20}  alt='img'  />
                  <p> 10:00-10:54 Am</p>
                </div>
              </div>
            </div>
          </div>
          <div className='new  flex flex-row justify-center items-center bg-slate-600 w-3/4' style={{ background: '#F0F0F0' }}>
            <div className='h-50'>
              <Image src={img} width={500} height={400}  alt='img'  />
            </div>

            <div className='details py-5 flex flex-col gap-5 justify-center text-start px-5'>
              <h1 className='font-bold text-xl'>Startup Development Idea</h1>
              <p>You are free to download any HTML and CSS from template website. you can use any template for bussiness purposes.</p>

              <div className='more flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center gap-2'>
                  <Image src={profile} width={35} height={35}  alt='img'  />
                  <div className='flex flex-col'>
                    <h6>Donia Hussien</h6>
                    <p>Founder</p>
                  </div>
                </div>

                <div className='flex flex-row gap-3 '>
                  <Image src={GPSIcon} width={18} height={18}  alt='img'  />
                  <p> 10:00-10:54 Am</p>
                </div>
                <div className='flex flex-row gap-3'>
                  <Image src={clockIcon} width={20} height={20}  alt='img'  />
                  <p> 10:00-10:54 Am</p>
                </div>
              </div>
            </div>
          </div>
          <div className='new  flex flex-row justify-center items-center bg-slate-600 w-3/4' style={{ background: '#F0F0F0' }}>
            <div className='h-50'>
              <Image src={img} width={500} height={400}  alt='img'  />
            </div>

            <div className='details py-5 flex flex-col gap-5 justify-center text-start px-5'>
              <h1 className='font-bold text-xl'>Startup Development Idea</h1>
              <p>You are free to download any HTML and CSS from template website. you can use any template for bussiness purposes.</p>

              <div className='more flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center gap-2'>
                  <Image src={profile} width={35} height={35}  alt='img'  />
                  <div className='flex flex-col'>
                    <h6>Donia Hussien</h6>
                    <p>Founder</p>
                  </div>
                </div>

                <div className='flex flex-row gap-3 '>
                  <Image src={GPSIcon} width={18} height={18}  alt='img'  />
                  <p> 10:00-10:54 Am</p>
                </div>
                <div className='flex flex-row gap-3'>
                  <Image src={clockIcon} width={20} height={20}   alt='img' />
                  <p> 10:00-10:54 Am</p>
                </div>
              </div>
            </div>
          </div>
          <div className='new  flex flex-row justify-center items-center bg-slate-600 w-3/4' style={{ background: '#F0F0F0' }}>
            <div className='h-50'>
              <Image src={img} width={500} height={400}  alt='img'  />
            </div>

            <div className='details py-5 flex flex-col gap-5 justify-center text-start px-5'>
              <h1 className='font-bold text-xl'>Startup Development Idea</h1>
              <p>You are free to download any HTML and CSS from template website. you can use any template for bussiness purposes.</p>

              <div className='more flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center gap-2'>
                  <Image src={profile} width={35} height={35}  alt='img'  />
                  <div className='flex flex-col'>
                    <h6>Donia Hussien</h6>
                    <p>Founder</p>
                  </div>
                </div>

                <div className='flex flex-row gap-3 '>
                  <Image src={GPSIcon} width={18} height={18}  alt='img'  />
                  <p> 10:00-10:54 Am</p>
                </div>
                <div className='flex flex-row gap-3'>
                  <Image src={clockIcon} width={20} height={20}  alt='img'  />
                  <p> 10:00-10:54 Am</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default eventInfo