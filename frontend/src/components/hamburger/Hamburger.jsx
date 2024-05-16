import './Hamburger.css';
import React, { useState, useRef, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import Button from '../button/Button';
import NavList from './NavList';

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);
  // const menuRef = useRef(null);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter' && !isOpen) {
  //     setOpen(true);
  //   } else if (event.key === 'Escape' || (event.key === 'Enter' && isOpen)) {
  //     setOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   if (isOpen) {
  //     menuRef.current.focus();
  //   }
  // }, [isOpen]);

  return (
    // <div className={'hamburger-menu' + (isOpen ? ' open' : '')} tabIndex="0" onKeyDown={handleKeyPress}>
    //   <div className='menu-icon-container' onClick={toggleMenu} tabIndex="0">
    <div className={'hamburger-menu' + (isOpen ? ' open' : '')}>
      <div className='menu-icon-container' onClick={toggleMenu}>
        <Hamburger direction='right' toggled={isOpen} />
      </div>
      {/* <nav className={'menu' + (isOpen ? ' open' : '')} tabIndex="-1" ref={menuRef}> */}
      <nav className={'menu' + (isOpen ? ' open' : '')}>
        <hr className='line'/>
        <div className="flex-container">
          {/* <ul>
            <li><Button text='Home' src='/'/></li>
            <li><Button text='About' src='/about'/></li>
            <li><Button text='Courses' src='/courses'/></li>  
            <li><Button text='Test [404]' src='*'/></li>
            <li><Button text='Profile' src='/profile'/></li>
            <li><Button text='Login' src='/login'/></li>
            <li><Button text='Register' src='/register'/></li>
            <li><Button text='Admin' src='/admin'/></li>
          </ul> */}
          <NavList/>
        </div>
      </nav>
    </div>
  );
}
