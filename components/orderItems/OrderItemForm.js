/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createOrderItem, updateOrderItem } from '../../utils/data/orderItemData';
import { getOpenOrderByUserId } from '../../utils/data/orderData';

const initialState = {
  orderId: '',
  itemId: '',
  quantity: 0,
};

function OrderItemForm({ orderItemObj, itemObj }) {
  const [openOrder, setOpenOrder] = useState({});
  const [currentOrderItem, setCurrentOrderItem] = useState(initialState);
  const { user } = useAuth();
  const router = useRouter();

  // function to get the open order of the user that is logged in
  const getOpenOrder = async () => {
    try {
      const order = await getOpenOrderByUserId(user.id);
      setOpenOrder(order);
    } catch (error) {
      console.error('Error fetching open order: ', error);
    }
  };

  // call the function to get access to the info
  useEffect(() => {
    getOpenOrder();
  }, [user.id]);

  useEffect(() => {
    if (orderItemObj.id) {
      setCurrentOrderItem({
        id: orderItemObj.id,
        orderId: orderItemObj.order_id,
        itemId: orderItemObj.item_id,
        quantity: orderItemObj.quantity,
      });
    }
  }, [orderItemObj]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (orderItemObj.id) {
      let Qty = Number(currentOrderItem.quantity);

      const updatedOrderItem = {
        id: orderItemObj.id,
        orderId: Number(currentOrderItem.orderId),
        itemId: Number(currentOrderItem.itemId),
        quantity: (Qty += 1),
      };
      updateOrderItem(updatedOrderItem).then(() => router.push('/cart'));
    } else {
      const orderItem = {
        orderId: Number(openOrder.id),
        itemId: Number(itemObj.id),
        quantity: 1,
      };
      createOrderItem(orderItem).then(() => router.push('/cart'));
    }
  };

  return (
    <div style={{
      paddingTop: '120px',
      maxWidth: '400px',
      margin: 'auto',
    }}
    >
      <Form onSubmit={handleSubmit}>
        <Button size="lg" variant="success" type="submit">Add {itemObj.name} to Cart?</Button>
      </Form>
    </div>
  );
}

OrderItemForm.propTypes = {
  orderItemObj: PropTypes.shape({
    id: PropTypes.number,
    order_id: PropTypes.number,
    item_id: PropTypes.number,
    quantity: PropTypes.number,
  }),
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

OrderItemForm.defaultProps = {
  orderItemObj: initialState,
};

export default OrderItemForm;
