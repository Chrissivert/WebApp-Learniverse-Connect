import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/home">
        <img src="front-end\src\resources\learniverse_connect_logo.svg" alt="Logo" className="logo" />
      </Link>
    </div>
  );
};

export default Logo;
