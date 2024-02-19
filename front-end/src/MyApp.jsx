import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbarTest';

function MyApp() {
  const [count, setCount] = useState(0);
  const randomText = generateRandomText();

  return (
    <>
      <h1>Learniverse Connect</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>./MyApp.jsx</code> HELLLOOOOO
        </p>
      </div>
      <div>
        <Navbar />
        <h1>My React App</h1>
        <p>{randomText}</p>
      </div>
    </>
  );
}

function generateRandomText() {
  const texts = ["Hello!", "Welcome to my app!", "React is awesome!"];
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

export default MyApp;
