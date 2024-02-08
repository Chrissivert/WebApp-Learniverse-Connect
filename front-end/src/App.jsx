import React, { useState } from 'react';
import './App.css';
import NavigationBar from './components/navbar/navbarTest.jsx';

function App() {
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
        <p>
          Edit <code>./App.jsx</code> HELLLOOOOO
        </p>
        <img src="front-end\src\resources\learniverse_connect_logo.svg" width="40%"></img>
      </div>
      <div>
        <h1>Welcome to Learniverse Connect!</h1>
        <p>{randomText}</p>
      </div>
    </>
  );
}

function generateRandomText() {
  const texts = ["Hello!", "Welcome!", "Start Learning Today!"];
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

export default App;
