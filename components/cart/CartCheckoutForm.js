import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { createOrder, updateOrder } from '../../utils/data/orderData';
import { useAuth } from '../../utils/context/authContext';

export default function CartCheckoutForm({ orderObj }) {
  // eslint-disable-next-line no-unused-vars
  const [currentOrder, setCurrentOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const getDateTime = () => {
    const date = new Date();
    const formattedDate = date.toISOString();
    return formattedDate;
  };

  const dateTime = getDateTime();

  useEffect(() => {
    if (orderObj.id) {
      setCurrentOrder({
        id: orderObj.id,
        userId: orderObj.user_id.id,
        total: orderObj.total,
        isOpen: orderObj.is_open,
        timestamp: orderObj.timestamp,
      });
    }
  }, [orderObj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // set loading state to true while form is being submitted
    setIsLoading(true);

    const updatedOrder = {
      id: orderObj.id,
      userId: orderObj.user_id.id,
      total: orderObj.total,
      isOpen: false,
      timestamp: dateTime,
    };
    updateOrder(updatedOrder).then(() => {
      // set loading state back to false after form has been submitted
      setIsLoading(false);

      const payload = {
        userId: user.id,
        total: 0,
        isOpen: true,
        datePlaced: dateTime,
      };
      console.warn(payload);
      createOrder(payload);
      router.push('/confirmation');
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div
          className="text-center d-flex flex-column justify-content-center align-content-center"
          style={{
            height: '30vh',
            padding: '30px',
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          <h1>Ready to Place Your Order?</h1>
          <h1 style={{ color: 'darkOrange', fontWeight: 'bold' }}>Total: ${orderObj.total}</h1>
          <Button size="lg" variant="success" type="submit" disabled={isLoading}>
            {isLoading ? 'Placing Order...' : 'Place Order'}
          </Button>
        </div>
      </Form>

    </>
  );
}

CartCheckoutForm.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.shape({
      id: PropTypes.number,
    }),
    total: PropTypes.string,
    is_open: PropTypes.bool,
    timestamp: PropTypes.string,
  }).isRequired,
};
