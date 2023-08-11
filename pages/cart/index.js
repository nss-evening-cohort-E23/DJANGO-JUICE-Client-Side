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
  const { user } = useAuth();

  const getOpenOrder = async () => {
    try {
      const order = await getOpenOrderByUserId(user.id);
      setOpenOrder(order);
      console.warn(order);
    } catch (error) {
      console.error('Error fetching open order: ', error);
    }
  };

  const getCartItems = async () => {
    try {
      const items = await getOrderItemsByOrderId(openOrder.id);
      setCartItems(items);
    } catch (error) {
      console.error('Error fetching cart items: ', error);
    }
  };

  useEffect(() => {
    getOpenOrder();
    if (openOrder.id) {
      getCartItems();
    }
  }, [user.id, openOrder.id]);

  useEffect(() => {
    const total = cartItems.reduce((accumulator, object) => accumulator + parseFloat(object.item_id.price).toFixed(2), 0);

    if (openOrder.id) {
      const payload = {
        id: openOrder.id,
        userId: openOrder.user_id?.id,
        total: Number(total),
        isOpen: openOrder.is_open,
        timestamp: openOrder.timestamp,
      };
      updateOrder(payload);
    }
  }, [cartItems]);

  const total = cartItems.reduce((accumulator, object) => accumulator + parseFloat(object.item_id.price), 0);

  return (
    <>
      <div className="cart-page" />
      <Head>
        <title>Cart</title>
      </Head>
      <div className="text-center d-flex flex-column justify-content-center align-content-center">
        <br />
        <h1>My Cart</h1>
      </div>
      <div className="cart-items-container">
        {cartItems.map((cartItem) => (
          <section key={`cartItem--${cartItem.id}`} className="order-items">
            <CartItemCard cartItemObj={cartItem} onUpdate={getCartItems} />
          </section>
        ))}
      </div>
      <br />
      <h1>Order total: ${total}</h1>
      <Link passHref href={`/checkout/${openOrder.id}`}>
        <Button type="button" className="m-2">Checkout</Button>
      </Link>
      <div />
    </>
  );
}
