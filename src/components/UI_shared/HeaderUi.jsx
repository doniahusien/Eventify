import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeaderUi = ({ title, description, buttonText, buttonLink, imageUrl, imageAlt, headline2, elipse }) => {
    return (
        <div className={`flex  py-16 items-center ${elipse?"justify-center":"justify-around"} `}>
            {/* Text content */}
            <div className="flex flex-col justify-center items-start pl-10 py-5 gap-10" style={{ width: "500px" }}>
                <h1 className="text-3xl font-bold text-primary-txt" style={{ fontSize:  elipse?"50px":"45px", width: elipse?"550px":"450px", lineHeight: "55px" }}>{title}</h1>
                <p className="text-primary-txt font-semibold" style={{ width: "500px" }}>{description}</p>
                {buttonText ?
                    <Link href={buttonLink} className="mt-4 bg-primary-txt text-white py-2 px-8 rounded-full focus:outline-none">
                        <button>{buttonText}</button>
                    </Link>
                    : <></>}

            </div>

            {/* Image */}
            <div className={`w-1/2 flex  ${headline2? "justify-center items-center pl-36":"justify-end pr-36"}`}>
                <Image src={imageUrl} alt={imageAlt} width={elipse?350:450} height={400} />
            </div>
        </div>
    )
}

export default HeaderUi
