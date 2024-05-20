import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coursecard from "../../../coursecard/Coursecard";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getOneCourseFromServer } from '../../../../services/course-service';


export default function DeleteCourse() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(getOneCourseFromServer(id));
        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };
    fetchCourse();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(getOneCourseFromServer(id));
      navigate('/admin/course');
      alert('Course deleted successfully');
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div>
        <Link to={"/admin/course"}>
          <button className='button'>Go back →</button>
        </Link>   
      </div>
      <h1>Delete the course "{course.title}"</h1>

      <form onSubmit={handleSubmit}>
      {course && <Coursecard course={course} />}
      <button type='submit'>Delete</button>
      </form>
    </>
  );
}