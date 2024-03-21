import React from 'react';
import './Header.css';
import HamburgerMenu from '../../components/hamburger/Hamburger.jsx';
import Logo from '../../components/logo/Logo.jsx';

export default function Header() {

  return (
    <header>
      <HamburgerMenu/>
      <Logo home_src={true}/>
      <h3>Log in</h3>
    </header>
  );
}