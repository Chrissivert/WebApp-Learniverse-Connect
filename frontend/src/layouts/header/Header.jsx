import React, { useContext } from 'react';
import './Header.css';
import HamburgerMenu from '../../components/hamburger/Hamburger.jsx';
import Logo from '../../components/logo/Logo.jsx';
import CurrencySelector from '../../components/currencySelector/CurrencySelector.jsx';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../pages/cart/CartProvider.jsx';
import { Link } from 'react-router-dom';

export default function Header() {
  const { cartPopped } = useContext(CartContext);
  const { cart } = useContext(CartContext);

  return (
    <header className="header-container">
      <div className="logo-container">
        <Logo home_src={true} aria-label="Homepage-button" />
      </div>
      
      <div className="currency-selector-container">
        <CurrencySelector currencies={['USD', 'EUR', 'GBP', 'NOK']} />
      </div>

      <div className={`cart-container ${cartPopped ? "pop" : ""}`}>
        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-text">Cart ({cart.length})</span>
        </Link>
      </div>

      <div className='login-container'>
        <Link to="/login" className="login-link">
          <img src="/login/login_white.png" alt="Login" className="login"></img>
        </Link>
      </div>

      {/* Add tabIndex to HamburgerMenu */}
      <HamburgerMenu tabIndex="0" />
    </header>
  );
}
