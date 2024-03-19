import React from 'react'
import FormButtons from '@/components/auth/FormButtons';
import FormInputs from '@/components/auth/FormInputs';
import Link from 'next/link';
import TextLogo from '@/components/shared/TextLogo';
import ContactInfo from '@/components/contact/ContactInfo';
const contact = () => {
  return (
    <>
       <div className="flex justify-center items-center h-screen p-5">
      <div className="flex flex-row  shadow-lg bg-gray-300" style={{ width: "790px", height: "500px" }}>
        <div className="w-1/2 flex justify-center gap-5" style={{ backgroundColor: "#212861" }}>
          <ContactInfo />
        </div>

        <div className="w-1/2 flex items-center justify-center flex-col space-y-5 " style={{ background: "#F0F0F0" }}>
          <div>
            <TextLogo />
          </div>
          <div className="w-64 flex items-center justify-between flex-col space-y-6 ">
            <FormInputs label="Your name" type="text"/>
              <FormInputs label="Your Email" type="email" />
              <FormInputs label="Your Message" type="textarea" />
            <FormButtons label={"Send"} />
          </div>
      
        </div>
      </div>
    </div>
    </>
  )
}

export default contact