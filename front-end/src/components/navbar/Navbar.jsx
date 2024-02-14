import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../logo/Logo.jsx';
import CartIcon from '../cart/CartIcon.jsx';
import './navbar.css';

const NavigationBar = () => {
  const [colorMode, setColorMode] = useState('dark');

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <header>
      <Navbar expand="lg" className="nav">
        <Container fluid>
          <Navbar.Brand className="mr-auto">
          </Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="search">Search</Nav.Link>
            <Nav.Link href="about">About Us</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav> */}
          <Logo />
          {/* <Nav className="ms-auto">
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="cart">
              <CartIcon colorMode={colorMode} />
            </Nav.Link>
            <button onClick={toggleColorMode}>Toggle Color Mode</button>
          </Nav> */}
        </Container>
      </Navbar>
    </header>
  );
};

export default NavigationBar;
