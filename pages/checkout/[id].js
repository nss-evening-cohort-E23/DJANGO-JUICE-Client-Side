// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import CartCheckoutForm from '../../components/cart/CartCheckoutForm';
// import { getSingleOrder } from '../../utils/data/orderData';

// const Checkout = () => {
//   const router = useRouter();
//   const [orderDetails, setOrderDetials] = useState({});

//   const { id } = router.query;

//   const getOrderDetails = async () => {
//     try {
//       const details = await getSingleOrder(id);
//       setOrderDetials(details);
//     } catch (error) {
//       console.error('Error fetching order details: ', error);
//     }
//   };

//   useEffect(() => {
//     getOrderDetails();
//   }, []);

//   return (
//     <>
//       <br />
//       <h1>Checkout</h1>
//       <CartCheckoutForm orderObj={orderDetails} />
//     </>
//   );
// };

// export default Checkout;
