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
    <Card className="text-center cart-item-card" style={{ width: '25rem', margin: '15px', padding: '10px' }}>
      <Card.Header>
        <h1>{cartItemObj.item_id.name}</h1>
      </Card.Header>
      <Card.Body>
        <img src={cartItemObj.item_id.image_url} alt="item" style={{ width: '22rem', height: 'auto' }} />
        <div style={{ padding: '15px' }}>
          <h3>Price: ${cartItemObj.item_id.price}</h3>
        </div>
      </Card.Body>
      <div>
        <Button type="button" className="m-2" variant="danger" onClick={removeItem}>Remove</Button>
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
      image_url: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CartItemCard;
