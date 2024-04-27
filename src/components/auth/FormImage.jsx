import React from 'react'
import Image from 'next/image'

const FormImage = ({imgURL}) => {
    return (
        <>
            <div>
            <Image alt='img' src={imgURL} width={500} height={300}/>
            </div>
        </>
    )
}

export default FormImage