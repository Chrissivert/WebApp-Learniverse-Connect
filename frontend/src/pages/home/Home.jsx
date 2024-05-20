import React from 'react';
import "./Home.css";  // Ensure this path is correct
import "../../index.css"; // Additional CSS if needed
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Learniverse Connect</h1>
        <p>Start learning today blabla</p>
        <Link to="/courses" className="link">
          <button className="courseButton"><span></span>Find your course →</button>
          <button className="login"><span></span>Create your account →</button>
        </Link>
      </div>
    </div>
  );
}
