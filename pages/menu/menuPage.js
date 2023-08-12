import React, { useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

import { getItems } from '../../utils/data/itemsData';
import ItemCard from '../../components/Items/ItemCard';
// import { useAuth } from '../../utils/context/authContext';

function ItemHome() {
  // const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  console.warn(search);
  const showProducts = () => {
    getItems().then((data) => setProducts(data));
  };
  useEffect(() => {
    showProducts();
  }, []);
  return (
    <>
      <div className="">
        <Form>
          <InputGroup className="my-3">
            <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search Products" />
          </InputGroup>
        </Form>
        <div className="mt-5 d-flex flex-wrap">
          {products
            .filter((product) => (search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search)))
            .map((product) => (
              <section key={`product--${product.id}`}>
                <ItemCard id={product.id} name={product.name} description={product.description} image={product.image_url} price={product.price} onUpdate={showProducts} />
              </section>
            ))}
        </div>
      </div>
    </>
  );
}

export default ItemHome;
