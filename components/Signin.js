import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
        zIndex: 1,
        minHeight: '25rem',
        width: '100%',
        minWidth: '30rem',
        paddingBlock: '0 5rem',
      }}
    >
      <h1>Hi there!</h1>
      <p>Click the button below to login!</p>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>

      <Link passHref href="/register" className="link">
        <u>Don&apos;t have an account? Click here to sign up!</u>
      </Link>
    </div>
  );
}

export default Signin;
