import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import HamburgerMenu from '../../components/hamburger/Hamburger.jsx';
import Logo from '../../components/logo/Logo.jsx';
import Button from '../../components/button/Button.jsx';
import { CartContext } from '../../pages/cart/CartProvider.jsx';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon from react-icons

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="header-container">
      <div className="logo-container">
        <Logo home_src={true}/>
      </div>
      <div className="button-container">
        <Button text='Register' src='/register'/>
        <Button text='Real login' src='/login'/>
      </div>
      <div className="cart-container">
        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="cart-icon" /> {/* Cart icon */}
          <span className="cart-text">Cart ({cart.length})</span>
        </Link>
        
      </div>
      <HamburgerMenu/>
      
      
    </header>
  );
}
