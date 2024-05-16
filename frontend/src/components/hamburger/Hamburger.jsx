import './Hamburger.css';
import React, { useState, useRef, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import Button from '../button/Button';

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !isOpen) {
      setOpen(true);
    } else if (event.key === 'Escape' || (event.key === 'Enter' && isOpen)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      menuRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className={'hamburger-menu' + (isOpen ? ' open' : '')} tabIndex="0" onKeyDown={handleKeyPress}>
      <div className='menu-icon-container' onClick={toggleMenu} tabIndex="0">
        <Hamburger direction='right' toggled={isOpen} />
      </div>
      <nav className={'menu' + (isOpen ? ' open' : '')} tabIndex="-1" ref={menuRef}>
        <hr />
        <div className="flex-container">
          <div><Button text='Home' src='/'/></div>
          <div><Button text='About' src='/about'/></div>
          <div><Button text='Courses' src='/courses'/></div>  
          <div><Button text='Test [404]' src='/Error_404-Page_Not_Found'/></div>
          <div><Button text='Profile' src='/profile'/></div>
          <div><Button text='Login' src='/login'/></div>
          <div><Button text='Register' src='/register'/></div>
          <div><Button text='Admin' src='/admin'/></div>
        </div>
      </nav>
    </div>
  );
}
