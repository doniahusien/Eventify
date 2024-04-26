import React from 'react';
import Dashboard from '@/components/shared/Dashboard';
import OnGoingEvent from '@/components/UI_shared/OnGoingEvent';
import RecentActivity from '@/components/UI_shared/RecentActivity';
import Meeting from '@/components/UI_shared/Meeting';
const Index = () => {
    const eventData = [
        {
            author: {
                name: 'Donia Hussien',
                image: '/images/profile.svg',
            },
            content: 'Discover the best things to do & events in Cairo. explore concerts, meetups, open mics, art shows, music events and a lot more.',
            imageUrl: '/images/eventone.png',
            icons: ['/icons/heart2.svg', '/icons/star2.svg', '/icons/chat2.svg'],
        },
        {
            author: {
                name: 'Donia Hussien',
                image: '/images/profile.svg',
            },
            content: 'Discover the best things to do & events in Cairo. explore concerts, meetups, open mics, art shows, music events and a lot more.',
            imageUrl: '/images/eventone.png',
            icons: ['/icons/heart2.svg', '/icons/star2.svg', '/icons/chat2.svg'],
        },
        {
            author: {
                name: 'Donia Hussien',
                image: '/images/profile.svg',
            },
            content: 'Discover the best things to do & events in Cairo. explore concerts, meetups, open mics, art shows, music events and a lot more.',
            imageUrl: '/images/eventone.png',
            icons: ['/icons/heart2.svg', '/icons/star2.svg', '/icons/chat2.svg'],
        },
        {
            author: {
                name: 'Donia Hussien',
                image: '/images/profile.svg',
            },
            content: 'Discover the best things to do & events in Cairo. explore concerts, meetups, open mics, art shows, music events and a lot more.',
            imageUrl: '/images/eventone.png',
            icons: ['/icons/heart2.svg', '/icons/star2.svg', '/icons/chat2.svg'],
        },
        
    ];

    const recentActivities = [
        {
            authorName: 'Samia Elkholy',
            imageSrc: '/images/userTWO.png',
            activityText: 'No matter where you are in the world',
        },
        {
            authorName: 'John Doe',
            imageSrc: '/images/userTWO.png',
            activityText: 'No matter where you are in the world',
        },{
            authorName: 'John Doe',
            imageSrc: '/images/userTWO.png',
            activityText: 'No matter where you are in the world',
        },
        {
            authorName: 'John Doe',
            imageSrc: '/images/userTWO.png',
            activityText: 'No matter where you are in the world',
        },{
            authorName: 'John Doe',
            imageSrc: '/images/userTWO.png',
            activityText: 'No matter where you are in the world',
        },
    ];

    return (
        <div className="flex py-10">
            <div className="bg-gray-200 flex p-5">
                <Dashboard />
            </div>
            <div className=" pb-10">
                <div className="events-container flex flex-col gap-20" >
                    <div className="events flex gap-10 overflow-x-auto">
                        {eventData.map((event, index) => (
                            <OnGoingEvent key={index} {...event} />
                        ))}
                    </div>

                    <div className=' bg-white flex flex-col gap-10 items-center'>
                    
                    <h1 className="text-2xl font-bold">Meetings</h1>
                        <Meeting />
                        <Meeting />
                        <Meeting />
                    </div>
                </div>
            </div>
            <div className="pr-10 flex flex-col gap-10">
                <div className="flex flex-col gap-8 bg-white">
                    <h1 className="text-2xl font-bold">Recent Activity</h1>
                    {recentActivities.map((activity, index) => (
                        <RecentActivity key={index} {...activity} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Index;
