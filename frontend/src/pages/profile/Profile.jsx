import React from "react";
import { useEffect } from "react";
import "./Profile.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();

  useEffect(
    function () {
      async function getUser() {
        try {
          const res = await axios.get(`http://localhost:8080/user/${id}`);
          const data = await res.data;

          if (data.Response === "False") {
            throw new Error(data.Error);
          }

          console.log(data);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
      getUser();
    },
    [id]
  );

  return (
    <div className="profilepage">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
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
      src="/profile/prince_froggy.jpeg"
      alt="Prince Froggy"
    />
  );
}

function Intro() {
  return (
    <div className="intro">
      <h2>Prince Froggy</h2>
      <p>Full-stack web developer and student at NTNU.</p>
      <p>User since: January 8th 2024</p>
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
