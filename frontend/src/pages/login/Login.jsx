import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../index.css";
import "./Login.css";
import { AuthContext } from "../admin/AuthProvider";
import { postAuthToServer } from "../../services/user-request";
import { getUserByEmail } from "../../services/user-request";
import { getFavoriteCoursesFromAUser } from "../../services/favorite-course";
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

function saveUserDataToStorage(userData) {
  try {
    const data = JSON.stringify(userData);
    localStorage.setItem("user", data);
    console.log(data);
  } catch (error) {
    console.error("Could not save user data to localStorage:", error);
  }
}

function Login() {
  //const auth = useContext(AuthContext);
  const [userId, setUserId] = useState(null);
  const { login } = useContext(AuthContext); // Get login function from AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();

  useEffect(() => {
    if (loginSuccess) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loginSuccess, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }
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
      const response = await postAuthToServer(formData);

      /* if (!response.ok) {
        throw new Error("Login failed");
      } */
      const userData = parseJwt(response.data.jwt);
      saveUserDataToStorage(userData);
      localStorage.setItem("token", response.data.jwt);
      /* setCookie("jwt", response.jwt);
      setCookie("current_username", userData.sub);
      setCookie("current_user_roles", userData.roles.join(",")); */
      login(userData); // Update AuthContext with user information
      setLoginSuccess(true);
      //console.log("res.data " + res.data);
      const convertedEmail = email.replace("@", "%40");
      console.log("convertedEmail: " + convertedEmail);
      //console.log("this is my user" + user.sub);
      const res = await getUserByEmail(convertedEmail);
      console.log("res: " + res);
      const currentUser = res.data.id;
      console.log("res.data " + res.data);
      console.log("currentUser: " + currentUser);
      setUserId(currentUser);
      localStorage.setItem("ActiveUserId", userId);

      const favRes = await getFavoriteCoursesFromAUser(currentUser);
      //let favoritesArray = objArray.map(({ id }) => id);
      console.log("getfavouritecoursesfrom returned: " + favRes.data);

      //window.location.href = "/";
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Login failed. Please try again.");
    }
  };

  useEffect(() => {
    if (userId !== null) {
      localStorage.setItem("ActiveUserId", userId);
      //window.location.href = "/";
    }
  }, [userId]);

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
          <label>Email</label>
          <input
            type="text"
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
          <button type="submit">Login</button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>
          No account? Sign in{" "}
          <Link to="/register" className="register-link">
            here
          </Link>
          !
        </p>
      </form>
      {loginSuccess && <div className="success-message">Login Successful!</div>}
      <button onClick={getAllUsers}></button>
    </div>
  );
}

export default Login;
