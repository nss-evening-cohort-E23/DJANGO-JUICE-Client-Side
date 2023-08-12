/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getOpenOrderByUserId, updateOrder } from '../../utils/data/orderData';
import { getOrderItemsByOrderId } from '../../utils/data/orderItemData';
import CartItemCard from '../../components/CartItemCard';

export default function ViewCart() {
  const [openOrder, setOpenOrder] = useState({});
  const [cartItems, setCartItems] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [cartTotal, setCartTotal] = useState(0);
  const { user } = useAuth();

  const getOpenOrder = async () => {
    try {
      const order = await getOpenOrderByUserId(user.id);
      setOpenOrder(order);
    } catch (error) {
      console.error('Error fetching open order: ', error);
    }
  };

  // eslint-disable-next-line consistent-return
  const getCartItems = async () => {
    try {
      const items = await getOrderItemsByOrderId(openOrder.id);
      setCartItems(items);
      return items;
    } catch (error) {
      console.error('Error fetching cart items: ', error);
    }
  };

  const getCartTotal = (items) => {
    const total = items.reduce((accumulator, object) => accumulator + parseFloat(object.item_id.price), 0);
    setCartTotal(total.toFixed(2));
  };

  useEffect(() => {
    getOpenOrder();
    if (openOrder.id) {
      getCartItems().then((items) => {
        getCartTotal(items);
      });
    }
  }, [user.id, openOrder.id]);

  useEffect(() => {
    const total = cartItems.reduce((accumulator, object) => accumulator + parseFloat(object.item_id.price), 0);
    const roundedTotal = total.toFixed(2);

    if (openOrder.id) {
      const payload = {
        id: openOrder.id,
        userId: openOrder.user_id?.id,
        total: Number(roundedTotal),
        isOpen: openOrder.is_open,
        timestamp: openOrder.timestamp,
      };
      updateOrder(payload);
    }
  }, [cartItems, openOrder.id]);

  const total = cartItems.reduce((accumulator, object) => accumulator + parseFloat(object.item_id.price), 0);
  const roundedTotal = total.toFixed(2);

  return (
    <div className="cart-page">
      <Head>
        <title>Cart</title>
      </Head>
      <div className="text-center d-flex flex-column justify-content-center align-content-center" style={{ marginTop: '80px' }}>
        <br />
        <div style={{ display: 'flex', justifyContent: 'right' }}>
          <h1>Order Total: </h1>
          <h1 style={{ paddingRight: '30px', paddingLeft: '20px', color: 'darkOrange' }}> ${roundedTotal}</h1>
          <Link passHref href={`/checkout/${openOrder.id}`}>
            <Button size="lg" type="button" variant="success" className="m-2">Checkout</Button>
          </Link>
        </div>
      </div>
      <div className="cart-items-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cartItems.map((cartItem) => (
          <section key={`cartItem--${cartItem.id}`} className="order-items">
            <CartItemCard cartItemObj={cartItem} onUpdate={getCartItems} />
          </section>
        ))}
      </div>
      <br />
    </div>
  );
}
