import React from 'react';
import CourseSection from '../../courseBox/CourseBox.jsx';
import ThemeToggle from '../../../ThemeToggle.jsx';
import './mainpage.css';

function CreateMainPage({ expanded }) {
  return (
    <div className={expanded ? 'main-content-expanded' : 'main-content'}>
      <ThemeToggle/>
      <CourseSection/>
    </div>
  );
}

export default CreateMainPage;
