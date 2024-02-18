import React, { useState } from 'react';
import NavigationBar from './components/navbar/Navbar.jsx';
import CourseSection from './components/courseBox/CourseBox.jsx';

function CreateMainPage() {

  return (
    <>
      <h1>Learniverse Connect</h1>
      <CourseSection/>
    </>
  );
}

export default CreateMainPage;
