import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../logo/Logo.jsx';
import CartIcon from '../cart/CartIcon.jsx';

import Hamburger from 'hamburger-react';
import { slide as Menu } from 'react-burger-menu';
import {

  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import HamburgerMenu from './hamburger/Hamburger.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

export default function NavigationBar() {

  return (
    <header>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='/'>
          <Logo/> Learniverse Connect
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
         {/*<Navbar.Collapse id='responsive-navbar-nav'>
          <Nav>
            <Nav.Link href='/search'>Search</Nav.Link>
            <Nav.Link href='/about'>About us</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
        <HamburgerMenu/>
      </Navbar>
    </header>
  );
};