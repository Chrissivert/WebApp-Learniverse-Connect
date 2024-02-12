import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Footer from "./components/footerRename/Footer.jsx"
import SearchCourse from './SearchCourse';
import './css/index.css';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchCourse />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
