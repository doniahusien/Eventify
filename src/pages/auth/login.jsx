// Login.jsx
import { useRouter } from 'next/router'; // Import useRouter hook
import React, { useState, useEffect } from 'react';
import FormInputs from '@/components/auth/FormInputs';
import FormImage from '@/components/auth/FormImage';
import FormButtons from '@/components/auth/FormButtons';
import Link from 'next/link';
import imgURL from '../../../public/images/authsignin.png';
import TextLogo from '@/components/shared/TextLogo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  useEffect(() => {
    // Fetch user data from API when the component mounts
    fetch('/api/logIn')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Wait until users data is loaded from the API
    if (loading) {
      console.log('Waiting for data to load...');
      return;
    }

    // Trim whitespace from input email and password
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Validate input fields
    if (!trimmedEmail || !trimmedPassword) {
      console.log('Please enter email and password');
      setLoginError('Please enter email and password');
      return;
    }

    // Find the user with the entered email and password (case-insensitive comparison)
    console.log('Users:', users);
    console.log('Input email:', trimmedEmail);
    console.log('Input password:', trimmedPassword);

    const user = users.find(user =>
      user.email.trim().toLowerCase() === trimmedEmail.toLowerCase() &&
      user.password === trimmedPassword
    );

    if (user) {
      console.log('Login successful:', user);
      switch (user.type_id) {
        case 4:
          router.push('/attendee');
          break;
        case 2:
          router.push('/sponser');
          break;
        default:
          console.log('Invalid user type');
      }
    } else {
      console.log('Invalid email or password');
      setLoginError('Invalid email or password');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

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
            <FormInputs label="Email" type="email" value={email} onChange={(value) => setEmail(value)} />
            <FormInputs label="Password" type="password" value={password} onChange={(value) => setPassword(value)} />
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
