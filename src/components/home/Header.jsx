import React from 'react'
import img from '../../../public/images/hero-figure1 1.png'
import HeaderUi  from '../UI_shared/HeaderUi'
const Header = () => {
    return (
        <HeaderUi
        title="Event Registration Software"
        description="Plan your event, register your guests and manage it all on Eventify. With Eventify, you can streamline your event planning process and ensure everything runs smoothly from start to finish."
        buttonText="Create Event"
        buttonLink="/create-event"
        imageUrl={img}
        imageAlt="Image 1"
    />
    )
}

export default Header
