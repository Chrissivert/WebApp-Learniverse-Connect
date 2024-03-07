import React from "react";
import "./profilePage.css";

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

function ProfilePage() {
  return (
    <div className="profilepage">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        </div>
      </div>
      <div className="content">
        <p className="contentTitle">This is the info part of the page</p>
      </div>
      <div>
        <p>This is miscellaneous social media info about the user</p>
      </div>
      <div>
        <p>This is where various info about the courses are located</p>
      </div>
      
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="front-end/src/resources/images/profile/prince_froggy.png"
      alt="Prince Froggy"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Prince Froggy</h1>
      <p>
        Full-stack web developer and student at NTNU. I like to play video
        games, and enjoy swimming at the beach.
      </p>
    </div>
  );
}
export default ProfilePage;
