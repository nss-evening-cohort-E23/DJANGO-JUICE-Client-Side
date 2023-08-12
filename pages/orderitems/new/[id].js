/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import OrderItemForm from '../../../components/orderItems/OrderItemForm';
import { getSingleItem } from '../../../utils/data/itemsData';

const NewOrderItem = () => {
  const router = useRouter();
  const [itemDetails, setItemDetails] = useState({});

  const { id } = router.query;

  const getItemDetails = async () => {
    try {
      const details = await getSingleItem(id);
      setItemDetails(details);
    } catch (error) {
      console.error('Error fetching product details: ', error);
    }
  };

  useEffect(() => {
    getItemDetails();
  }, []);

  return (
    <>
      <OrderItemForm itemObj={itemDetails} />
    </>
  );
};

export default NewOrderItem;
