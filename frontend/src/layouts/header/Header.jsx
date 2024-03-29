import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { CartContext } from './CartContext'; // Import CartContext
import './Header.css';
import HamburgerMenu from '../../components/hamburger/Hamburger.jsx';
import Logo from '../../components/logo/Logo.jsx';
import Button from '../../components/button/Button.jsx';
import { CartContext } from '../../pages/cart/CartContext.jsx';

export default function Header() {
  // Access cart state from CartContext
  const { cart } = useContext(CartContext);

  return (
    <header>
      <HamburgerMenu/>
      <Logo home_src={true}/>
      {/* Button to navigate to cart */}
      <Button text='iamAcART' src='/cart'/>
      {/* Display cart length */}
      <li><Link to="/cart">Cart ({cart.length})</Link></li>
      <Button text='Register' src='/register'/>
      <Button text='Real login' src='/login'/>
    </header>
  );
}
