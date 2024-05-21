import React from "react";
import { useEffect, useState, useContext } from "react";
import "./Profile.css";
//import { PostImage } from "../../components/crudTest/post/image/PostImage";
//import '../../index.css';
import axios from "axios";
import { useParams } from "react-router-dom";
import { getUserByEmail } from "../../services/user-request";
import { AuthContext } from "../admin/AuthProvider";
import Unauthorized from "../error/unauthorized/401";
//import { logout } from "../admin/AuthProvider";
import { getFavoriteCoursesFromAUser } from "../../services/favorite-course";
import { Link } from "react-router-dom";
import GetFavoriteCourses from "../../components/crudTest/read/favoriteCourses/GetFavoriteCourses";
import UserAvatar from "../../components/userAvatar/UserAvatar";
import CurrencySelector from "../../components/currencySelector/CurrencySelector";

export default function Profile() {
  const auth = useContext(AuthContext);
  const [userId, setUserId] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");

  useEffect(() => {
    console.log(auth.user);
    if (auth.user && auth.user.roles && Array.isArray(auth.user.roles)) {
      const isUser = auth.user.roles.some(
        (role) => role.authority === "ROLE_USER"
      );

      const isAdmin = auth.user.roles.some(
        (role) => role.authority === "ROLE_ADMIN"
      );
      setIsUser(isUser);
      setIsAdmin(isAdmin);
    }

    setLoading(false);
  }, [auth.user]);

  useEffect(function () {
    async function getUser() {
      try {
        const user = auth.user;
        if (auth.user != null) {
          const convertedEmail = user.sub.replace("@", "%40");
          //console.log("this is my user" + user.sub);
          const res = await getUserByEmail(convertedEmail);
          const currentUser = res.data;
          setUserId(currentUser.id);
          localStorage.setItem("ActiveUserId", userId);
          setUserName(currentUser.username);
          setEmail(currentUser.email);
          setStartDate(currentUser.startDate);

          //const res = await axios.get(`http://localhost:8080/user/${id}`);
          //setImgId(res.data.imgId);
          /* const userToken = localStorage.getItem("token");
          console.log(userToken); */

          /* if (data.Response === "False") {
            throw new Error(data.Error);
          }

          console.log(data); */
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    getUser();
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  // If user is not user role or admin role, show unauthorized page
  if (!isUser && !isAdmin) {
    return <Unauthorized />;
  }
  return (
    <div className="profilepage">
      <div className="card">
        <UserAvatar user={auth.user} />
        <div className="data">
          <Intro userName={userName} email={email} startDate={startDate} />
        </div>
      </div>
      {userId && <GetFavoriteCourses userId={userId} />}
    </div>
  );
}

function signoff() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("favorites");
  localStorage.removeItem("cart");
}

function Intro({ userName, email, startDate }) {
  return (
    <div className="intro">
      <h1>{userName}</h1>
      <h2>{email}</h2>
      <p>User since: {startDate}</p>
      <div className="buttons">
        <Link to="/">
          <button className="button" onClick={signoff}>
            Sign Off
          </button>
        </Link>
      </div>
      <p>
        Welcome to your profile! Here you may access your favorite courses.
        Below are the courses you've marked as favorites. Dive back in whenever
        you're ready! Happy learning!
      </p>
      <CurrencySelector currencies={["NOK", "USD", "EUR", "GBP"]} />{" "}
      {/* Render CurrencySelector with currencies prop */}
    </div>
  );
}
