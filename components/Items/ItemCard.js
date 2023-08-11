/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
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
          marginTop: '30px',
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
          variant="warning"
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
ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ItemCard;
