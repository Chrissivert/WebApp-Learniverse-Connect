import React, { useState } from 'react';
import NavigationBar from './components/navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

function CreateMainPage() {
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
        <p>{randomText}</p>
      </div>
      <Footer/>
    </>
  );
}

function generateRandomText() {
  const texts = ["Hello!", "Welcome!", "Start Learning Today!"];
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

export default CreateMainPage;
