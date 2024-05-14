import './Hamburger.css';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import Button from '../button/Button';

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  // Function to handle key press events
  const handleKeyPress = (event) => {
    // If the key pressed is 'Enter' and the menu is closed, open it
    if (event.key === 'Enter' && !isOpen) {
      setOpen(true);
    }
    // If the key pressed is 'Escape' and the menu is open, close it
    else if (event.key === 'Escape' || event.key === "Enter" && isOpen) {
      setOpen(false);
    }
  };

  return (
    <div className={'hamburger-menu' + (isOpen ? ' open' : '')} tabIndex="0" onKeyDown={handleKeyPress}>
      <div className='menu-icon-container' onClick={toggleMenu}>
        <Hamburger direction='right' toggled={isOpen} />
      </div>
      <nav className={'menu' + (isOpen ? ' open' : '')}>
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
