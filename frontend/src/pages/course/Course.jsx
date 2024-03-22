import './Course.css';
import React from "react";
import { Link } from "react-router-dom";


function Course({}) {



  return(
    <div className="Course">
        <h1>This is course</h1>
        <Link to = {'/courses'}>
          <button>Go back</button>
        </Link>
        
      </div>
  );
}

export default Course;