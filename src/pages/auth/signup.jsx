import React from 'react'
import imgURL from '../../../public/images/authsignup.png';
import FormButtons from '@/components/auth/FormButtons';
import FormImage from '@/components/auth/FormImage';
import FormInputs from '@/components/auth/FormInputs';
import FormRadio from '@/components/auth/FormRadio';
import FormImgFile from '@/components/auth/FormImgFile';
import TextLogo from '@/components/shared/TextLogo';
const signup = () => {
  return (
    <div className="flex justify-center items-center h-screen p-5">
      <div className="flex flex-row shadow-lg bg-gray-300" style={{ width: "790px", height: "500px" }}>
        <div className="w-1/2 flex justify-center gap-5" style={{ backgroundColor: "#212861" }}>
          <div className="p-16 flex items-center justify-center">
            <FormImage imgURL={imgURL} />
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center flex-col " style={{ background: "#F0F0F0" }}>
          <div>
              <TextLogo />
          </div>
          <div className="w-84 flex items-center flex-col space-y-6 ">
            <form action=""className="flex flex-col space-y-5">
              <FormInputs label="First Name" type="text" />
              <FormInputs label="Last Name" type="text" />
              <FormInputs label="Email" type="email" />
              <FormInputs label="Password" type="password" />
              <div className='space-x-1 radio'>
                <FormRadio label={"Attendee"} value={"attendee"} />
                <FormRadio label={"Speaker"} value={"speaker"} />
                <FormRadio label={"Sponsor"} value={"sponsor"} />
                <FormRadio label={"Organizer"} value={"organizer"} />
              </div>
              <FormImgFile />
            </form>
            <FormButtons label="Submit"  />
          </div>
        </div>
      </div>
    </div>
  );
};


export default signup