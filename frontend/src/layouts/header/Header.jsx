import React from 'react';
import './Header.css';
import HamburgerMenu from '../../components/hamburger/Hamburger.jsx';
import Logo from '../../components/logo/Logo.jsx';
import Button from '../../components/button/Button.jsx';

export default function Header() {

  return (
    <header>
      <HamburgerMenu/>
      <Logo home_src={true}/>
      <Button text='Search' src='/register'/>
    </header>
  );
}