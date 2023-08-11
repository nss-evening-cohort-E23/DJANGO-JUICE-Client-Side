import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { registerUser } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

// eslint-disable-next-line no-unused-vars
function RegisterForm({ userObj }) {
  const { user } = useAuth();
  const router = useRouter();
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
    registerUser(formData).then(() => (router.push('/')));
  };

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />

        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange} required />

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  userObj: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  // updateUser: PropTypes.func,
};

// RegisterForm.defaultProps = {
//   // updateUser: PropTypes.func,
// };

export default RegisterForm;
