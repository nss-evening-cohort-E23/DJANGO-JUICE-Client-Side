import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getItems } from '../api/itemData';
import ItemCard from '../components/Items';

function Items() {
  const [items, setItems] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getItems(user.uid).then(setItems);
  }, [user.uid]);

  return (
    <div className="item">
      <h1>Menu</h1>
      <div className="add-item">
        <Link href="/item/cart" passHref>
          <Button variant="info" type="button">
            Add To Cart
          </Button>
        </Link>
      </div>
      <div className="card-container" data-testid="items-container" id="items-container">
        {items.map((item) => (
          <ItemCard
            key={item.firebaseKey}
            itemObj={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Items;
