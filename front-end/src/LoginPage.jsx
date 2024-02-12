import React from 'react';
import NavigationBar from './components/navbar/Navbar';

function LoginPage() {
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
      </form>
    </div>
  );
}

export default LoginPage;
