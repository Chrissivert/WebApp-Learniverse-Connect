import React from "react";
import { useEffect, useState } from "react";
import "./Profile.css";
//import { PostImage } from "../../components/crudTest/post/image/PostImage";
//import '../../index.css';
import axios from "axios";
import { useParams } from "react-router-dom";
import { getUserByEmail } from "../../services/user-request";

export default function Profile() {
  //const [imgId, setImgId] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  useEffect(function () {
    async function getUser() {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("user" + user.sub);
        const convertedEmail = user.sub.replace("@", "%40");
        //console.log("this is my user" + user.sub);
        console.log("convertedEmail: " + convertedEmail);
        const res = await getUserByEmail(convertedEmail);
        const currentUser = res.data;
        setUserName(currentUser.username);
        setEmail(currentUser.email);
        setStartDate(currentUser.startDate);
        console.log("username: " + userName);
        console.log("current user: " + currentUser);
        console.log("email: " + email);
        console.log("startDate: " + startDate);
        console.log(res);
        //const res = await axios.get(`http://localhost:8080/user/${id}`);
        //setImgId(res.data.imgId);
        /* const userToken = localStorage.getItem("token");
          console.log(userToken); */

        /* if (data.Response === "False") {
            throw new Error(data.Error);
          }

          console.log(data); */
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    getUser();
  });
  return (
    <div className="profilepage">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro userName={userName} email={email} startDate={startDate} />
        </div>
      </div>
      <Content />
      <SocialMedia />
      <CourseInfo />
      <CourseSelection />
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="http://localhost:8080/images/1/data"
      alt="Prince Froggy"
    />
  );
}

function Intro({ userName, email, startDate }) {
  return (
    <div className="intro">
      <h1>{userName}</h1>
      <h2>{email}</h2>
      <p>User since: {startDate}</p>
      <div className="buttons">
        <button className="button">Follow</button>
        <button className="button">Message</button>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      {/* <h1>User Info:</h1> */}
      {/* <div className="user-info">
        <table>
          <tr>Full Name:</tr>
          <tr>Start Date:</tr>
          <tr>Email:</tr>
          <tr>Password:</tr>
        </table>
        <table>
          <tr>Froggy Frogface</tr>
          <tr>January 8th 2024</tr>
          <tr>Frogger@Hotmail.com</tr>
          <tr>Sup</tr>
        </table>
      </div> */}
      <h3>This is the content part of the page.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        asperiores, magnam consequuntur deserunt repudiandae, non tempore maxime
        eum tempora ipsam reprehenderit, fuga labore corporis numquam quos rem
        error quaerat necessitatibus.
      </p>
      <p>
        Commodi asperiores, magnam consequuntur deserunt repudiandae, non
        tempore maxime eum tempora ipsam reprehenderit, fuga labore corporis
        numquam quos rem error quaerat necessitatibus.
      </p>
    </div>
  );
}

function CourseInfo() {
  return (
    <div className="course-info">
      <h3>This is where info about the user's personal courses are located.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        asperiores, magnam consequuntur deserunt repudiandae, non tempore maxime
        eum tempora ipsam reprehenderit, fuga labore corporis numquam quos rem
        error quaerat necessitatibus.
      </p>
    </div>
  );
}

function CourseSelection() {
  return (
    <div className="course-selection">
      <h3>This is where the user's personal courses are located.</h3>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="social-media">
      <h3>Miscellaneous social media info about the user.</h3>
    </div>
  );
}

/* useEffect(
  function () {
    async function getUsers() {
      try {
        const res = await axios.get(`http://localhost:8080/users`);
        const data = await res.data;

        if (data.Response === "False") {
          throw new Error(data.Error);
        }

        console.log(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    getUsers();
  },
  [id]
); */
