import './Hamburger.css';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import Button from '../../button/Button';

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  }

  return (
    <>
      {/* <div> */}
      <div className={'hamburger-menu' + (isOpen ? ' open' : '')}> 
        {/* <div className={'menu-container' + (isOpen ? 'open' : '')}> */}
        <div className='menu-icon-container' onClick={toggleMenu}>
          {/* <Hamburger direction='right' toggled={isOpen} toggle={toggleMenu}/> */}
          <Hamburger direction='right' toggled={isOpen}/>
        </div>
        <nav className={'menu' + (isOpen ? ' open' : '')}>
          <ul>
            <li>
              <Button text='Home' src='/'/>
            </li>
            <li>
              <Button text='About' src='/about'/>
            </li>
            <li>
              <Button text='Course' src='/course'/>
            </li>
            <li>
              <Button text='Search' src='/Search'/>
            </li>
            <li>
              <Button text='Test [404]' src='/Error_404-Page_Not_Found'/>
            </li>
            <li>
              <Button text='Profile' src='/profile'/>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}