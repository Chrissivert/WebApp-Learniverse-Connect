import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layouts/header/Header.jsx';
import Footer from './layouts/footer/Footer.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import NotFound from './pages/error/notFound/404.jsx';
import Courses from './pages/courses/Courses.jsx';
import Course from './pages/course/Course.jsx';
import Search from './pages/search/Search.jsx';
import FImage from '/home/front_image.svg';
import './index.css';
import Profile from './pages/profile/Profile.jsx';

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/course/:id' element={<Course/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}