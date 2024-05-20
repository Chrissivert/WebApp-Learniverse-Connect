import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import frontImage from '/home/front_image.png'
import findACourse from '/icons/home/find-a-course.png'
import createAnAccount from '/icons/home/create-an-account.png'
import readMoreAbout from '/icons/home/read-more-about.png'

export default function Home() {
  return (
    <div className="home-container">
      <div className='front-image'>
        <img className='image' src={frontImage} />
      </div>
      <div className='home-content'>
        <h1>Welcome to Learniverse Connect</h1>
        <p>Start Learning Today!</p>
        <div className='button-row'>
          <Link to="/courses" className="button-link">
            <button className='home-row-button'>
              <img src={findACourse} className='button-image' />
              <p>Find a course →</p>
            </button>
          </Link>
          <Link to='/register' className='button-link'>
            <button className='home-row-button'>
              <img src={createAnAccount} className='button-image' />
              <p>Create your account →</p>
            </button>
          </Link>
          <Link to='/about' className='button-link'>
            <button className='home-row-button'>
              <img src={readMoreAbout} className='button-image' />
              <p>Read more about us →</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
