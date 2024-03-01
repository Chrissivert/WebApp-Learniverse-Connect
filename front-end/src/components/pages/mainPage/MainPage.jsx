import React from 'react';
import CourseSection from '../../courseBox/CourseBox.jsx';
import ThemeToggle from '../../../ThemeToggle.jsx';
import './mainpage.css';
import YourComponent from '../../../FetchAPI.jsx';

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