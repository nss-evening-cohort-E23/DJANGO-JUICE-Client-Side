import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import Logo from '../components/Logo';

function Home() {
  const { user } = useAuth();

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <Logo />
        <h1>Welcome, {user.first_name}! </h1>

        <Link passHref href="/menu/menuPage">
          <Button className="menu-btn">Menu</Button>
        </Link>

        <Link passHref href="/cart">
          <Button className="cart-btn">Current Order</Button>
        </Link>

        <Link passHref href="/orders">
          <Button className="past-orders-btn">View Past Orders</Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
