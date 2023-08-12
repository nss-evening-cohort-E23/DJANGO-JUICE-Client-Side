import React from 'react';
import { useAuth } from '../../utils/context/authContext';

export default function ConfirmationPage() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Thank you for your order, {user.first_name}!</h1>
    </div>
  );
}
