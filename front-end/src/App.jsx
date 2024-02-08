import React, { useState } from 'react';
import './App.css';
import NavigationBar from './components/navbar/Navbar.jsx';
import './css/Logo.css';

function MainPage() {
  const [count, setCount] = useState(0);
  const randomText = generateRandomText();

  return (
    <>
      <NavigationBar/>
      <h1>Learniverse Connect</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <img src="front-end\src\resources\learniverse_connect_logo.svg" width="40%" className="logo" />
      </div>
      <div>
        <h1>Welcome to Learniverse Connect!</h1>
        <p>{randomText}</p>
        {/* Added random elements */}
        <div className="logo">Logo</div>
        <a href="#" className="logo react">React Logo</a>
        <div className="card">Card Element</div>
        <div className="read-the-docs">Read the Docs</div>
      </div>
    </>
  );
}

function generateRandomText() {
  const texts = ["Hello!", "Welcome!", "Start Learning Today!"];
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

export default MainPage;
