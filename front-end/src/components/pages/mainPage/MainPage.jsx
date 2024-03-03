import React from 'react';
// import CourseSection from '../../courseBox/CourseBox.jsx';
import ThemeToggle from '../../theme/ThemeToggle.jsx';
import './mainpage.css';
import YourComponent from '../../../FetchAPI.jsx';
import CourseSection from '../../courseBox/CourseSection.jsx';

function CreateMainPage() {
  return (
    <div>
      <ThemeToggle/>
      <CourseSection/>
      <YourComponent/>
    </div>
  );
}

export default CreateMainPage;