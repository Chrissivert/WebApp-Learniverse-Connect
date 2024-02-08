// Logo.jsx

import React from 'react';
import { useHistory } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Logo = () => {
  const history = useHistory();

  const handleClick = () => {
    // Handle logic for when the logo is clicked, e.g., navigate to a specific page
    history.push('/'); // Navigate to the homepage
  };

  return (
    <div className="logo" onClick={handleClick}>
       <img src="front-end\src\resources\learniverse_connect_logo.svg" alt="Logo" className="logo" />

    </div>
  );
};

export default Logo;
