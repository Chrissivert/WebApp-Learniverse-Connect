import './Hamburger.css';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import NavList from './NavList';

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div role="navigation" aria-label="Main Menu" className={'hamburger-menu' + (isOpen ? ' open' : '')}>
      <button
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        className='menu-icon-container'
        onClick={toggleMenu}
        aria-expanded={isOpen}
      >
        <Hamburger direction='right' toggled={isOpen} />
      </button>
      <nav className={'menu' + (isOpen ? ' open' : '')}>
        <hr className='line'/>
        <NavList/>
      </nav>
    </div>
  );
}
