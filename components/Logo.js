import React from 'react';
import Image from 'next/image';
import logo from '../src/assets/django-juice-logo.png';

export default function Logo() {
  return (
    <>
      <Image src={logo} alt="Logo" />
    </>
  );
}
