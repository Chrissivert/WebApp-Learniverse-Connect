import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import SearchCourse from './SearchCourse';
import './css/index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/searchCourses" element={<SearchCourse />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <div>
        <h1>Helldwadw</h1>
      </div>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
