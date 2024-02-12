import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css';

const Logo = () => {
  return (
    <Link to="/">
      <img src="front-end\src\resources\learniverse_connect_logo.svg" alt="Logo" className="logo" id="logo"/>
    </Link>
  );
};

export default Logo;
