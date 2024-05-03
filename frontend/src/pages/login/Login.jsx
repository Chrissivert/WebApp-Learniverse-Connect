import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import './Login.css'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      window.location.href = "/";
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };

    return (
        <div>
            <h1>Login</h1>
            
            <form onSubmit={handleSubmit}>
                <div className="imgcontainer">
                    <img src="/login/login.png" alt="Avatar" className="avatar"/>
                </div>
                <div className='form-container'>
                    <label>Username</label>
                    <input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label>Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Login</button>
                </div>
                <p>No account? Sign in <Link to="/register" className='register-link'>here</Link>!</p>
            </form>
        </div>
    );
}

export default Login;
