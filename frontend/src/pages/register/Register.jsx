import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { Link } from "react-router-dom";
import "../../index.css";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [roleId, setRoleId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

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
      // navigate('/login'); // Use navigate function for redirection
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="imgcontainer">
          <img src="/login/login.png" alt="Avatar" className="avatar" />
        </div>
        <div className="form-container">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            Register
          </button>
        </div>
        <p>
          Already have an account? Log in{" "}
          <Link to="/login" className="register-link">
            here
          </Link>
          !
        </p>
      </form>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default Register;
