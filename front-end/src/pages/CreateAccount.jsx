import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavigationBar from '../components/navbar/Navbar';

function LoginPage({ onNavigateToCreateAccount }) {
  const handleCreateAccountClick = () => {
    onNavigateToCreateAccount(); // Call the function to navigate to create account page
  };

  return (
    <div>
      <NavigationBar/>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
        {/* Replace button with Link to navigate to create account page */}
        <Link to="/createAccount" style={{ marginLeft: '10px' }}>Create Account</Link>
      </form>
    </div>
  );
}

export default LoginPage;
