// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
// import { useAuth } from '../../utils/context/authContext';
// // import { getOpenOrderByUserId, updateOrder } from '../../utils/data/orderData';
// // import { getOrderProductsByOrderId } from '../../utils/data/orderProductData';
// import CartItemCard from '../../components/cart';

// export default function ViewCart() {
//   const [openOrder, setOpenOrder] = useState({});
//   const [cartProducts, setCartProducts] = useState([]);
//   const { user } = useAuth();

//   // const getOpenOrder = async () => {
//   //   try {
//   //     const order = await getOpenOrderByUserId(user.id);
//   //     setOpenOrder(order);
//   //   } catch (error) {
//   //     console.error('Error fetching open order: ', error);
//   //   }
//   // };

//   const getCartProducts = async () => {
//     try {
//       const products = await getOrderProductsByOrderId(openOrder.id);
//       setCartProducts(products);
//     } catch (error) {
//       console.error('Error fetching cart products: ', error);
//     }
//   };

//   useEffect(() => {
//     getOpenOrder();
//     if (openOrder.id) {
//       getCartProducts();
//     }
//   }, [user.id, openOrder.id]);

//   useEffect(() => {
//     const total = cartProducts.reduce((accumulator, object) => accumulator + parseFloat(object.product_id.price).toFixed(2), 0);

//     if (openOrder.id) {
//       const payload = {
//         id: openOrder.id,
//         customerId: openOrder.customer_id?.id,
//         paymentType: openOrder.payment_type?.id,
//         total: Number(total),
//         needsShipping: openOrder.needs_shipping,
//         isCompleted: openOrder.is_completed,
//         datePlaced: openOrder.date_placed,
//       };
//       updateOrder(payload);
//     }
//   }, [cartProducts]);

//   const total = cartProducts.reduce((accumulator, object) => accumulator + parseFloat(object.product_id.price), 0);

//   return (
//     <>
//       <div className="cart-page" />
//       <Head>
//         <title>Cart</title>
//       </Head>
//       <div className="text-center d-flex flex-column justify-content-center align-content-center">
//         <br />
//         <h1>My Cart</h1>
//       </div>
//       <div className="cart-items-container">
//         {cartProducts.map((cartProduct) => (
//           <section key={`cartProduct--${cartProduct.id}`} className="order-products">
//             <CartItemCard cartItemObj={cartProduct} onUpdate={getCartProducts} />
//           </section>
//         ))}
//       </div>
//       <br />
//       <h1>Order total: ${total}</h1>
//       <Link passHref href={`/checkout/${openOrder.id}`}>
//         <Button type="button" className="m-2">Checkout</Button>
//       </Link>
//     </>
//   );
// }
