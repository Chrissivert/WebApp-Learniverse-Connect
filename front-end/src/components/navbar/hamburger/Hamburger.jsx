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
import './hamburger.css'
import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function HamburgerMenu() {

  return (
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav>
        <Nav.Link href='/search'>Search</Nav.Link>
        <Nav.Link href='/about'>About us</Nav.Link>
        <Nav.Link href='/contact'>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  )
}