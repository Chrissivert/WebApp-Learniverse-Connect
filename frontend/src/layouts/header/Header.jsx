import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import HamburgerMenu from '../../components/hamburger/Hamburger.jsx';
import Logo from '../../components/logo/Logo.jsx';
import Button from '../../components/button/Button.jsx';
import { CartContext } from '../../pages/cart/CartProvider.jsx';

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header>
      <HamburgerMenu/>
      <Logo home_src={true}/>
      {/* Display cart length */}
      <li><Link to="/cart">Cart ({cart.length})</Link></li>
      <Button text='Register' src='/register'/>
      <Button text='Real login' src='/login'/>
    </header>
  );
}
