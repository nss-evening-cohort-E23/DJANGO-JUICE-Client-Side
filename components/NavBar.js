/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';

import Image from 'next/image';
import { signOut } from '../utils/auth';
import Logo from './Logo';
import cart from '../src/assets/cart-icon.png';

export default function NavBar() {
  return (
    <Navbar fixed="top" expand="lg" className="nav-container">
      <Container fluid>
        <Link passHref href="/">
          <Navbar.Brand>
            <div className="nav-logo">
              <Logo />
            </div>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/menu/menuPage">
              <Button className="menu-btn">
                Menu
              </Button>
            </Link>

            <Link passHref href="/orders">
              <Button className="past-orders-btn">
                View Past Orders
              </Button>
            </Link>

            <Button className="logout-btn" onClick={signOut}>
              Logout
            </Button>

            <Link passHref href="/cart">
              <Button className="cart-btn">
                <div className="cart-icon">
                  <Image src={cart} alt="cart icon" />
                </div>
              </Button>
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
