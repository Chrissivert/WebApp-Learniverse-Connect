import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/mainPage/MainPage.jsx';
import Footer from "./components/footer/Footer.jsx"
import SearchCourse from './SearchCourse';
import LoginPage from './LoginPage.jsx';
import './css/index.css';
import PageNotFound from './PageNotFound';
import CreateAccountPage from './CreateAccount.jsx';
import NavigationBar from './components/navbar/Navbar.jsx';
import ThemeProvider from './ThemeProvider';
import CourseDetails from './components/pages/coursePage/CoursePage.jsx';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchCourse />} />
        <Route path ="/login" element={<LoginPage />} />
        <Route path ="/coursePage" element={<CourseDetails/>} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

export default App;




