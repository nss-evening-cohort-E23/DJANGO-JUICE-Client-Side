/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '../../utils/context/authContext';
import { getSingleItem } from '../../utils/data/itemsData';

const ViewItems = () => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState({});
  const { id } = router.query;
  const { user } = useAuth();

  useEffect(() => {
    getSingleItem(id).then((productData) => {
      setProductDetails(productData);
    });
  }, [id]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <h3>Item Name: {productDetails.name}</h3>
          <img src={productDetails.image_url} alt="productimage" style={{ width: '200px', borderRadius: '50px' }} />
          <h5>Description: {productDetails.description}</h5>
          <p>Price: ${productDetails.price}</p>
        </div>
      </div>
      <div className="d-flex">
        {console.warn(user)}
        {console.warn(productDetails)}
      </div>
    </>
  );
};

export default ViewItems;
