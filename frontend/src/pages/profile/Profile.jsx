import React from "react";
import "./Profile.css";
const skills = [
  {
    courses: "HTML+CSS",
    level: "advanced",
    color: "orangered",
  },
  {
    skill: "React",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Java",
    level: "intermediate",
    color: "orange",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
];

export default function Profile() {
  return (
    <div className="profilepage">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
        </div>
      </div>
      <div className="content">
        <h3>This is the content part of the page.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          asperiores, magnam consequuntur deserunt repudiandae, non tempore
          maxime eum tempora ipsam reprehenderit, fuga labore corporis numquam
          quos rem error quaerat necessitatibus.
        </p>
        <p>
          Commodi asperiores, magnam consequuntur deserunt repudiandae, non
          tempore maxime eum tempora ipsam reprehenderit, fuga labore corporis
          numquam quos rem error quaerat necessitatibus.
        </p>
      </div>
      <div className="social-media">
        <h3>Miscellaneous social media info about the user.</h3>
      </div>
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
