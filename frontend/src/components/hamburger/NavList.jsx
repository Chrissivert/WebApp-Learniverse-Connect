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
    <nav>
      <ul className="navList">
        <li>
          <Button text={'Home'} src={'/'} img={iconHome} alt={'White house'} imageName={'button-image'} className={'home-header-link'}/>
        </li>
        <li>
          <Button text={'Courses'} src={'/courses'} img={iconCourses} alt={'White magnifying glass'} imageName={'button-image'} className={'course-header-link'}/>
        </li>
        <li>
          <Button text={'About'} src={'/about'} img={iconAbout} alt={'White open book'} imageName={'button-image'} className={'about-header-link'}/>
        </li>
        {/* <li>
          <Button text={'Profile'} src={'/profile'} img={iconProfile} alt={'White door with an arrow pointing right from the left'} imageName={'button-image'} className={'profile-header-link'}/>
        </li>
        <li>
          <Button text={'Register'} src={'/register'} img={iconRegister} alt={'White upper part of a person'} imageName={'button-image'} className={'register-header-link'}/>
        </li> */}
        <li>
          <Button text={'Admin'} src={'/admin'} img={iconAdmin} alt={'White shield with a check mark'} imageName={'button-image'} className={'admin-header-link'}/>
        </li>
      </ul>
    </nav>
  );
}