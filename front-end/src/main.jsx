import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MainPage from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <MainPage />
    </React.StrictMode>
  </Router>,
);





