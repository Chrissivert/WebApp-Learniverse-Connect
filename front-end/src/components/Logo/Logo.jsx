import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/destination">
        <img src="front-end\src\resources\learniverse_connect_logo.svg" alt="Logo" className="logo" />
      </Link>
    </div>
  );
};

export default Logo;
