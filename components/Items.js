import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleItem } from '../api/itemData';

export default function itemCard({ itemObj, onUpdate }) {
  const deleteThisItem = () => {
    if (window.confirm(`Delete ${itemObj.name}?`)) {
      deleteSingleItem(itemObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={itemObj.image} alt={itemObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{itemObj.name}</Card.Title>
        <Card.Title>{itemObj.price}</Card.Title>
        <Card.Title>{itemObj.photo}</Card.Title>
        <Card.Title>{itemObj.description}</Card.Title>
        <Link href={`/item/orderItem/${itemObj.firebaseKey}`} passHref>
          <Button variant="info">ADD TO CART</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisItem} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

itemCard.propTypes = {
  itemObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
