import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../index.css";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password.length <= 6) {
      setError("Password must be longer than 6 characters.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      if (!response.ok) {
        throw new Error("Registration failed");
      }
      alert("Registration successful!");
      navigate('/login'); // Use navigate function for redirection
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1 id="registerTitle">Register</h1>
      {error && <p style={{ color: "red" }} role="alert">{error}</p>}
      <form onSubmit={handleSubmit} aria-labelledby="registerTitle">
        <div className="imgcontainer">
          <img src="/login/login.png" alt="Avatar" className="avatar" />
        </div>
        <fieldset className="form-container">
          <legend className="legend-register">
             Register Information 
          </legend>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-required="true"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-required="true"
          />
          <button type="submit" disabled={loading} aria-busy={loading}>
            Register
          </button>
        </fieldset>
        <p>
          Already have an account? Log in{" "}
          <Link to="/login" className="register-link">
            here
          </Link>
          !
        </p>
      </form>
      {loading && <p>Loading...</p>}
    </main>
  );
}

export default Register;
