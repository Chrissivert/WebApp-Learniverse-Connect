import React, { useState } from 'react';
import NavigationBar from './components/navbar/Navbar.jsx';
import CourseSection from './components/courseBox/CourseBox.jsx';
import ThemeToggle from './ThemeToggle.jsx';

function CreateMainPage() {

  return (
    <>
      <NavigationBar/>
      <h1>Learniverse Connect</h1>
      <ThemeToggle/>
      <CourseSection/>
    </>
  );
}

export default CreateMainPage;
