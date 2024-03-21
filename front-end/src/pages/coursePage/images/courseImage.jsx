import React from 'react';
import './courseImage.css'
import productImage from "./Java_programming_language_logo.svg";

const courseImage = () => {
  return (
    <img src={productImage} className="productImage" alt="java programming language logo"></img>
  );
}

export default courseImage;

// import { Link } from 'react-router-dom';
// import './logo.css';
// import logoImage from '../../../public/learniverse_connect_icon2.svg';

// const Logo = () => {
//   return (
//     <Link to="/">
//       <img src={logoImage} alt="Logo" className="logo" />
//     </Link>
//   );
// };

// export default Logo;