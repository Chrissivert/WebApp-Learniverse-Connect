import React from 'react';
import './Header.css';
import HamburgerMenu from './hamburger/Hamburger';
import Logo from '../logo/Logo';

export default function Header() {

  return (
    <header>
      <HamburgerMenu/>
      <Logo home_src={true}/>
      <h3>Log in</h3>
    </header>
  );
}