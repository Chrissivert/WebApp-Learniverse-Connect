import React from 'react';
import Button from '../button/Button';
import './navList.css';
import iconHome from "/icons/home/home-icon.png";
import iconAbout from "/icons/home/read-more-about.png";
import iconCourses from "/icons/home/find-a-course.png";
import iconProfile from "/icons/home/login-icon.png";
import iconRegister from "/icons/home/create-an-account.png";
import iconAdmin from "/icons/home/admin-icon.png";



export default function NavList() {
  return (
    <ul className="navList">
      <li><Button text='Home' src='/'/><img src={iconHome} className='button-image'/></li>
      <li><Button text='About' src='/about'/><img src={iconAbout} className='button-image'/></li>
      <li><Button text='Courses' src='/courses'/><img src={iconCourses} className='button-image'/></li>
      <li><Button text='Login' src='/profile'/><img src={iconProfile} className='button-image'/></li>
      <li><Button text='Register' src='/register'/><img src={iconRegister} className='button-image'/></li>
      <li><Button text='Admin' src='/admin'/><img src={iconAdmin} className='button-image'/></li>
    </ul>

// frontend\public\icons\home\home-icon.png
  );

  
}
