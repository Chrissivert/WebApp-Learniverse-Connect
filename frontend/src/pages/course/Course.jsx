import React from 'react';
import './Course.css';

export default function Course({image, description, price}) {
  return(
    <div className='course-container'>
      <img src={image}></img>
      <h1>{description}</h1>
      <h2>{price}</h2>
    </div>
  );
}