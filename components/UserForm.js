import { React, useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import { useAuth } from '../utils/context/authContext';

const initialState = {
  first_name: '',
  last_name: '',
  phone_number: '',
  email: '',
  address: '',
};

function UserForm() {
  const [formInput, setFormInput] = useState(initialState);
  // const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const payload = { ...formInput, uid: user.uid };
  // }

  return (
    <>
      <Form>
        <h2>Create an Account</h2>

        {/* FIRST NAME INPUT  */}
        <FloatingLabel controlId="floatingInput1" label="First Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            name="first_name"
            value={formInput.title}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
      </Form>
    </>
  );
}

UserForm.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    phone_number: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
  }),
};

UserForm.defaultProps = {
  obj: initialState,
};

export default UserForm;
