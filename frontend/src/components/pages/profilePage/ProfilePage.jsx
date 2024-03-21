import React from "react";
import "./profilePage.css";
import CourseBox from "../../courseBox/CourseBox";

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
        <div className="contentContainer1">
          <h3>This is part 1 of the content part of the page</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            laboriosam laudantium in tempora provident possimus dolorum iusto
            est, molestias iste optio repellat accusantium ea impedit aperiam
            praesentium aliquam architecto numquam!
          </p>
        </div>

        <h3 className="contentContainer2">
          This is part 2 of the content part of the page
        </h3>
      </div>
      <div className="social-media">
        <p>This is miscellaneous social media info about the user</p>
      </div>
      <div className="course-info">
        <p>This is where info about the user's personal courses are located</p>
        <CourseBox />
        <CourseBox />
        <CourseBox />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="front-end/src/resources/images/profile/prince_froggy.jpeg"
      alt="Prince Froggy"
    />
  );
}

function Intro() {
  return (
    <div>
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
export default ProfilePage;
