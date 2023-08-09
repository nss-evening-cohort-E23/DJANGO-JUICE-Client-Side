/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { deleteOrderItem } from '../utils/data/orderItemData';

// eslint-disable-next-line no-unused-vars
function CartItemCard({ cartItemObj, onUpdate }) {
  const removeItem = () => {
    if (window.confirm(`Remove ${cartItemObj.item_id.name}?`)) {
      deleteOrderItem(cartItemObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card className="text-center cart-item-card" style={{ width: '18rem', margin: '10px' }}>
      <Card.Header>{cartItemObj.item_id.name}</Card.Header>
      <Card.Body>
        <Card.Img src={cartItemObj.item_id.item_image_url} alt="item" />
        <h2>Price: ${cartItemObj.item_id.price}</h2>
      </Card.Body>
      <div>
        <Button type="button" className="m-2" onClick={removeItem}>Remove</Button>
      </div>
    </Card>
  );
}

CartItemCard.propTypes = {
  cartItemObj: PropTypes.shape({
    id: PropTypes.number,
    item_id: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      item_image_url: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CartItemCard;
