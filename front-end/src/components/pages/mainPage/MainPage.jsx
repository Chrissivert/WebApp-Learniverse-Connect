import React from 'react';
import CourseSection from '../../courseBox/CourseBox.jsx';
import ThemeToggle from '../../../ThemeToggle.jsx';
import './mainpage.css';

function CreateMainPage() {
  return (
    <div>
      <ThemeToggle/>
      <CourseSection/>
    </div>
  );
}

export default CreateMainPage;