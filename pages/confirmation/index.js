import React from 'react';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import Logo from '../../components/Logo';

export default function ConfirmationPage() {
  const { user } = useAuth();
  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <Link passHref href="/">
          <Navbar.Brand>
            <div>
              <Logo />
            </div>
          </Navbar.Brand>
        </Link>
        <div>
          <h1>Thanks, {user.first_name}!</h1>
        </div>
      </div>
    </>
  );
}
