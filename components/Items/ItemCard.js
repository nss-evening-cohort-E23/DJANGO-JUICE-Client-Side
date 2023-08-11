/* eslint-disable import/no-unresolved */

/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import React from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-bootstrap';

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
        <>
          <Button
            variant="warning"
            onClick={() => {
              router.push(`/items/${id}`);
            }}
          />
        </>
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
