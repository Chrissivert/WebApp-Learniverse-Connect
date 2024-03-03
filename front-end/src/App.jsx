import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateMainPage from './components/pages/mainPage/MainPage.jsx';
import Footer from "./components/footer/Footer.jsx"
import CreateLoginPage from './components/pages/LoginPage.jsx';
import './css/index.css';
import CreatePageNotFound from './components/pages/PageNotFound.jsx';
import CreateAccountPage from './components/pages/CreateAccount.jsx';
import NavigationBar from './components/navbar/Navbar.jsx';
import ThemeProvider from './components/theme/ThemeProvider.jsx';
import CourseDetails from './components/pages/coursePage/CoursePage.jsx';
import CreateSearchCoursesPage from './components/pages/searchCoursePage/SearchCoursePage.jsx';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route exact path="/" element={<CreateMainPage />} />
        <Route path="/search" element={<CreateSearchCoursesPage />} />
        <Route path ="/login" element={<CreateLoginPage />} />
        <Route path ="/coursePage" element={<CourseDetails/>} />
        <Route path="*" element={<CreatePageNotFound/>} />
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




