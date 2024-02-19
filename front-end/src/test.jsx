import React from 'react';
import './App.css'; // Import CSS file for styling

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Website</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main>
        <img src="your-image-url.jpg" alt="Image" />
        <div>
          <a href="#">View courses</a>
        </div>
        <div className="course">
          <h2>Course 1</h2>
          <p>Description of Course 1</p>
        </div>
        <div className="course">
          <h2>Course 2</h2>
          <p>Description of Course 2</p>
        </div>
        <div className="course">
          <h2>Course 3</h2>
          <p>Description of Course 3</p>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
}

export default App;
