import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../logoRename/Logo.jsx'; // Adjust the path to your Logo component
import '../../css/navbar.css';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand className="mr-auto">
          <Logo />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="search">Search</Nav.Link>
          <Nav.Link href="about">About Us</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="cart">
            <img
              src="path_to_cart_image"
              alt="Cart"
              // style={{ width: '30px', height: '30px' }} // adjust size as needed
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
