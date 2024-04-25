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
import { useSpeaking } from '../../components/textReader/speakingContext.jsx';

export default function Header() {
  const { cart } = useContext(CartContext);
  const { toggleSpeaking, speakingEnabled } = useSpeaking(); // Use speakingEnabled to show status

  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/" className="logo-link"> {/* Add className="logo-link" */}
          <Logo home_src={true} aria-label="Homepage-button" />
          <SpeakingComponent text="Home Page" />
        </Link>
      </div>
      <div className="currency-selector-container">
        <CurrencySelector currencies={['USD', 'EUR', 'GBP', 'NOK']} />
      </div>

      <div className="cart-container">
        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="cart-icon" />
          <SpeakingComponent text={`Cart (${cart.length})`} />
        </Link>
      </div>

      <div className='login-container'>
        <Link to="/login" className="login-link">
          <img src="/login/login_white.png" alt="Login" className="login"></img>
          <SpeakingComponent text="Login" />
        </Link>
      </div>

      <div className="speak-toggle">
        <button onClick={toggleSpeaking}>
          {speakingEnabled ? "Speaking ON" : "Speaking OFF"}
        </button>
      </div>

      <HamburgerMenu />
    </header>
  );
}
