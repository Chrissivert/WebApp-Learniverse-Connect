// Header.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import HamburgerMenu from '../../components/hamburger/Hamburger.jsx';
import Logo from '../../components/logo/Logo.jsx';
import Button from '../../components/button/Button.jsx';
import CurrencySelector from '../../components/currencySelector/CurrencySelector.jsx'; // Import CurrencySelector
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../pages/cart/CartProvider.jsx';

export default function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="header-container">
      <HamburgerMenu />
      <div className="logo-container">
        <Logo home_src={true} />
      </div>
      <div className="currency-selector-container">
        <CurrencySelector currencies={['USD', 'EUR', 'GBP', 'NOK']} />
      </div>
      <div className="cart-container">
        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-text">Cart ({cart.length})</span>
        </Link>
      </div>
      <div className="button-container">
        <Button text='Register' src='/register'/>
        <Button text='Real login' src='/login'/>
      </div>
    </header>
  );
}
