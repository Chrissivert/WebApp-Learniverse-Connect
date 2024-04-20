// Header.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import HamburgerMenu from '../../components/hamburger/Hamburger.jsx';
import Logo from '../../components/logo/Logo.jsx';
import CurrencySelector from '../../components/currencySelector/CurrencySelector.jsx';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../pages/cart/CartProvider.jsx';
import SpeakingComponent from '../../components/textReader/TextSpeaker.jsx';

export default function Header() {
  const { cart } = useContext(CartContext);

  const speakText = (text) => {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/home" className="logo-link" onMouseOver={() => speakText('Home Page')}>
          <Logo home_src={true} />
          <SpeakingComponent text="Home Page" />
        </Link>
      </div>
      <div className="currency-selector-container">
        <CurrencySelector currencies={['USD', 'EUR', 'GBP', 'NOK']} />
      </div>

      <div className="cart-container">
        <Link to="/cart" className="cart-link" onMouseOver={() => speakText('Cart')}>
          <FaShoppingCart className="cart-icon" />
          <span className="cart-text">Cart ({cart.length})</span>
          <SpeakingComponent text={`Cart (${cart.length})`} />
        </Link>
      </div>

      <div className='login-container'>
        <Link to="/login" className="login-link" onMouseOver={() => speakText('Login')}>
          <img src="/login/login_white.png" alt="Login" className="login"></img>
          <SpeakingComponent text="Login" />
        </Link>
      </div>
      <HamburgerMenu/>
    </header>
  );
}
