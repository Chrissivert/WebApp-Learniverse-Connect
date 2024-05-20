import React, { useContext } from 'react';
import './Header.css';
import HamburgerMenu from '../../components/hamburger/Hamburger.jsx';
import Logo from '../../components/logo/Logo.jsx';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../pages/cart/CartProvider.jsx';
import { Link } from 'react-router-dom';
import NavList from '../../components/hamburger/NavList.jsx';
import UserAvatar from '../../components/userAvatar/UserAvatar.jsx'; // Import the UserAvatar component
import { AuthContext } from '../../pages/admin/AuthProvider.jsx';

export default function Header() {
  const { cart } = useContext(CartContext);
  const auth = useContext(AuthContext);

  const user = auth.user;

  return (
    <header className="header-container">
      <div className="logo-container">
        <Logo home_src={true} aria-label="Homepage-button" />
      </div>
      <div className="learniverse-connect">
        <Link to="/" className="learniverse-link">
          Learniverse connect
        </Link>
      </div>
      <div className="navlist-container">
        <NavList />
      </div>
      <div className="hamburger-menu">
        <HamburgerMenu />
      </div>
      <div className="header-right-container">
        <div className="cart-container">
          <Link to="/cart" className="cart-link">
            <FaShoppingCart className="cart-icon" />
            <span className="cart-text">Cart ({cart.length})</span>
          </Link>
        </div>
        {user ? (
          <UserAvatar user={user} /> // Show UserAvatar if user is logged in
        ) : (
          <div className="login-container">
            <Link to="/login" className="login-link">
              <img src="/login/login_white.png" alt="Login" className="login" />
              <span className="login-text">Login</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
