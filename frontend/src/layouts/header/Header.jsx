import React, { useContext } from 'react';
import './Header.css';
import HamburgerMenu from '../../components/hamburger/Hamburger.jsx';
import { CartContext } from '../../pages/cart/CartProvider.jsx';
import { Link } from 'react-router-dom';
import NavList from '../../components/hamburger/NavList.jsx';
import UserAvatar from '../../components/userAvatar/UserAvatar.jsx';
import { AuthContext } from '../../pages/admin/AuthProvider.jsx';
import cartImage from '/cart/whiteCart.png';
import whitelogo from '/logo/white_icon.png'
import Button from '../../components/button/Button.jsx';


export default function Header() {
  const { cart } = useContext(CartContext);
  const auth = useContext(AuthContext);

  const user = auth.user;

  return (
    <header className="header-container">
      <div className='header-content'>
        <Link to="/" className="header-home-link">
          <div className='logo-and-title-section'>
            <div className="logo-container">
              <img src={whitelogo} className='company-logo' />
            </div>
            <div className="company-title">
              <h2>Learniverse Connect</h2>
            </div>
          </div>
        </Link>
        <div className="navlist-container">
          <NavList />
        </div>
        <div className="hamburger-menu">
          <HamburgerMenu />
        </div>
        <div className="cart-and-profile-section">
          {/*  */}
          <div className="cart-container">
            <Link to="/cart" className="cart-header-link">
              <img src={cartImage} className='cart-img' />
              <span className="cart-text">Cart ({cart.length})</span>
            </Link>
          </div>
          {/*  */}
          {user ? (
            <UserAvatar user={user} className="user-avatar" />
          ) : (
            <div className="login-container">
              <Link to="/login" className="login-link">
                <img src="/login/login.png" alt="Login" className="login-img" />
                <span className="login-text">Login</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
