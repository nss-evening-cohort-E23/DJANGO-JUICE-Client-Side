/* eslint-disable react/prop-types */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaInfoCircle, FaCartPlus } from 'react-icons/fa'; // Import the "info-circle" icon

const ItemCard = ({
  id, name, description, price, image,
}) => {
  const router = useRouter();

  return (
    <>
      <Card
        className="product-card"
        style={{
          width: '15rem',
          marginTop: '40px',
          justifyContent: 'center',
          display: 'flex',
          flexWrap: 'flex',
        }}
      >
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <img src={image} alt="postimage" style={{ width: '200px', height: '200px' }} />
          <Card.Text>Description: {description}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
        </Card.Body>
        <Button
          variant="primary"
          onClick={() => {
            router.push(`/items/${id}`);
          }}
        >
          <FaInfoCircle style={{ marginRight: '5px' }} /> {/* Details icon */}
          Details
        </Button>
        <Button
          variant="success" // Choose a color that suits your design
          onClick={() => {
            router.push('/cart');
          }}
          style={{ marginTop: '10px' }}
        >
          <FaCartPlus style={{ marginRight: '5px' }} /> {/* Add to Cart icon */}
          Add to Cart
        </Button>
      </Card>
    </>
  );
};

export default ItemCard;
