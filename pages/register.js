import React from 'react';
// import { useRouter } from 'next/router';
import RegisterForm from '../components/RegisterForm';
// import { useAuth } from '../utils/context/authContext';
// import { Button } from 'react-bootstrap';

function RegisterUser() {
  // const { user } = useAuth();
  // const router = useRouter();

  // const register = () => {
  //   router.push('/');
  // };

  // if (user) {
  //   console.warn('user already exists');
  //   return (
  //     <button type="button" onClick={register}>Continue to Account Home</button>
  //   );
  // }
  return (
    <div><RegisterForm /></div>
  );
}

export default RegisterUser;
