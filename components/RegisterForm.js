import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { useRouter } from 'next/router';
import { registerUser } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

// eslint-disable-next-line no-unused-vars
function RegisterForm() {
  const { user } = useAuth();
  // const router = useRouter();
  const [formData, setFormData] = useState({
    uid: user.uid,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then(window.location.href = '/');
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        style={{
          height: 'auto',
          width: '60vh',
          padding: '30px',
          margin: '15vh auto',
          backgroundColor: '#04AD39',
          textAlign: 'center',
          borderRadius: '20px',
        }}
      >
        <h3>Welcome! Please create an account to continue:</h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Label />
          <Form.Control type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />

          <Form.Label />
          <Form.Control type="text" placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleChange} required />

          <Form.Label />
          <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />

          <Form.Label />
          <Form.Control type="tel" placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

          <Form.Label />
          <Form.Control type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange} required />

        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default RegisterForm;
