import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layouts/header/Header.jsx';
import Footer from './layouts/footer/Footer.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import NotFound from './pages/error/notFound/404.jsx';
import Course from './pages/course/Course.jsx';
import './index.css';
import Profile from './pages/profile/Profile.jsx';
import Register from './pages/signup/Register.jsx';
import Login from './pages/login/Login.jsx';
import CoursesPage from './pages/courses/CoursesPage.jsx';

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
        <Route path='/course/:id' element={<Course/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}