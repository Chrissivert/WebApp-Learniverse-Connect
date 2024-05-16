import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layouts/header/Header.jsx';
import Footer from './layouts/footer/Footer.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import NotFound from './pages/error/notFound/404.jsx';
import Course from './pages/course/Course.jsx';
import Profile from './pages/profile/Profile.jsx';
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import CoursesPage from './pages/courses/CoursesPage.jsx';
import CartPage from './pages/cart/CartPage.jsx';
import './index.css';
import { CurrencyProvider } from './components/currencySelector/TargetCurrencyContext.jsx';
import CartProvider from './pages/cart/CartProvider.jsx';
import { SpeakingProvider } from './components/textReader/speakingContext.jsx';
import AdminPage from './pages/admin/Admin.jsx';
import { AuthProvider } from './pages/admin/AuthProvider.jsx';
import PurchasedPage from './pages/purchased/PurchasedPage.jsx';

export default function App() {  
  const [targetCurrency, setTargetCurrency] = useState('AUD'); 

  return (
    <AuthProvider>
    <SpeakingProvider>
    <CurrencyProvider>
      <CartProvider> 
        <Router>
          <Header targetCurrency={targetCurrency} setTargetCurrency={setTargetCurrency} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<CoursesPage />} />
            <Route path='/course/:id' element={<Course />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/purchased" element={<PurchasedPage/>} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </CurrencyProvider>
    </SpeakingProvider>
    </AuthProvider>
  );
}
