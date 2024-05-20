import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getOneCourseFromServer, updateCourseOnServer } from '../../../../services/course-service';

export default function PutCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setFormData] = useState({
    title: '',
    levelId: '',
    categoryId: '',
    startDate: '',
    endDate: '',
    credit: '',
    hoursPerWeek: '',
    relatedCertification: '',
    description: '',
  });

  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryId] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [levelId] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await getOneCourseFromServer(id);
        setFormData(response.data);
        setSelectedLevel(response.data.levelId);
        setSelectedCategory(response.data.categoryId)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course data:', error);
        setLoading(false);
      }
    };
    fetchCourseData();
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'levelId') {
      setSelectedLevel(value); // Update selected level only
    } else {
      setFormData({
        ...data,
        [id]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        id: data.id,
        title: data.title,
        levelId: parseInt(levelId || data.levelId),
        categoryId: parseInt(categoryId || data.categoryId),
        startDate: data.startDate,
        endDate: data.endDate,
        credit: data.credit,
        hoursPerWeek: data.hoursPerWeek,
        relatedCertification: data.relatedCertification,
        description: data.description,
      };
      const response = await getOneCourseFromServer(id);
      const currentCourse = response.data;
      userData.hidden = currentCourse.hidden;

      await updateCourseOnServer(id, userData);
      navigate('/admin/course');
      alert('Course updated successfully');
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <Link to={"/admin/course"}>
          <button className='button'>← Go back</button>
        </Link>   
      </div>
      <h1>Update Course "{data.title}"</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>
          Title
          <input id='title' value={data.title} onChange={handleChange} />
        </label>
        <label htmlFor='levelId'>
          Level ID
          <select id='levelId' value={selectedLevel} onChange={handleChange}>
            <option value="1">Beginner</option>
            <option value="2">Intermediate</option>
            <option value="3">Expert</option>
          </select>
        </label>
        <label htmlFor='categoryId'>
          Category ID
          <select id='categoryId' value={selectedCategory} onChange={handleChange}>
            <option value="1">Information Technologies</option>
            <option value="2">Digital Marketing</option>
            <option value="3">Business and Entrepreneurship</option>
            <option value="4">Data Science and Analytics</option>
          </select>
        </label>
        <label htmlFor='startDate'>
          Start Date
          <input id='startDate' type='date' value={data.startDate} onChange={handleChange} />
        </label>
        <label htmlFor='endDate'>
          End Date
          <input id='endDate' type='date' value={data.endDate} onChange={handleChange} />
        </label>
        <label htmlFor='credit'>
          Credit
          <input id='credit' type='number' value={data.credit} onChange={handleChange} />
        </label>
        <label htmlFor='hoursPerWeek'>
          Hours Per Week
          <input id='hoursPerWeek' type='number' value={data.hoursPerWeek} onChange={handleChange} />
        </label>
        <label htmlFor='relatedCertification'>
          Related Certification
          <input id='relatedCertification' value={data.relatedCertification} onChange={handleChange} />
        </label>
        <label htmlFor='description'>
          Description
          <input id='description' value={data.description} onChange={handleChange} />
        </label>
        <button type='submit'>Update</button>
      </form>
    </>
  );
}