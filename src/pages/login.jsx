import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormInputs from '@/components/auth/FormInputs';
import FormImage from '@/components/auth/FormImage';
import FormButtons from '@/components/auth/FormButtons';
import Link from 'next/link';
import imgURL from '../../public/images/authsignin.png';
import TextLogo from '@/components/shared/TextLogo';
import { loginUser } from '@/features/auth/authThunks';

const Login = () => {
  const dispatch = useDispatch();
  const loginError = useSelector(state => state.auth.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email })); 
  };

  return (
    <div className="flex justify-center items-center h-screen p-5">
      <div className="flex flex-row shadow-lg bg-gray-300" style={{ width: "790px", height: "500px" }}>
        <div className="w-1/2 flex justify-center gap-5" style={{ backgroundColor: "#212861" }}>
          <div className="p-16 flex items-center justify-center">
            <FormImage imgURL={imgURL} />
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center flex-col space-y-5 " style={{ background: "#F0F0F0" }}>
          <div>
            <TextLogo />
          </div>
          <form className="w-64 flex items-center justify-between flex-col space-y-6 " onSubmit={handleSubmit}>
            <FormInputs label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> {/* Change label to 'Email' */}
            <FormInputs label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <FormButtons label="Log in" onClick={handleSubmit} />
          </form>
          <div>
            {loginError && <div className="text-red-600">{loginError}</div>}
            <Link href="/signup" className="mr-4" style={{ color: "#1A2FD6" }}>
              Create New Account ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
