import React from 'react'
import Image from 'next/image'

const FormImage = ({imgURL}) => {
    return (
        <>
            <div>
            <Image src={imgURL} alt="image" width={500} height={300}/>
            </div>
        </>
    )
}

export default FormImage