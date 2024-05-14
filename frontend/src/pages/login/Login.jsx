import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import "./Login.css";
import { AuthContext } from "../admin/AuthProvider";
import { postAuthToServer } from "../../services/user-request";
// import { jwtDecode } from "jwt-decode";

/**
 * Parse JWT string, extract information from it
 * Code copied from https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
 * @param token JWT token string
 * @returns {any} Decoded JWT object
 */
function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function saveUserDataToStorage(userData){
  try {
    const data = JSON.stringify(userData);
    localStorage.setItem('user', data);
    console.log(data);
  } catch (error) {
    console.error("Could not save user data to localStorage:", error);
  }
}

function Login() {
  const { login } = useContext(AuthContext); // Get login function from AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      /* const response = await fetch("http://localhost:8080/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }); */
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      console.log(formData);
      const response = await postAuthToServer(formData);
      console.log(response);

      /* if (!response.ok) {
        throw new Error("Login failed");
      } */
      console.log("data data " + response.data.jwt);
      const userData = parseJwt(response.data.jwt);
      console.log(userData);
      saveUserDataToStorage(userData);
      localStorage.setItem("token", response.jwt);
      setCookie("jwt", response.jwt);
      setCookie("current_username", userData.sub);
      setCookie("current_user_roles", userData.roles.join(","));
      login(userData); // Update AuthContext with user information
      alert("Login successful!");
      
      //window.location.href = "/";
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  async function getAllUsers() {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/users", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="imgcontainer">
          <img src="/login/login.png" alt="Avatar" className="avatar" />
        </div>
        <div className="form-container">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
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
          <button type="submit">Login</button>
        </div>
        <p>
          No account? Sign in{" "}
          <Link to="/register" className="register-link">
            here
          </Link>
          !
        </p>
      </form>
      <button onClick={getAllUsers}></button>
    </div>
  );
}

export default Login;
