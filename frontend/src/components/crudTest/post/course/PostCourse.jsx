import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./PostCourse.css";
import { useNavigate, Link } from "react-router-dom";
import { addCourseToServer } from '../../../../services/course-service';
import { getLevelsFromServer } from '../../../../services/levels-service';
import { getCategoriesFromServer } from '../../../../services/category-service';

export default function PostCourse() {
  const [data, setFormData] = useState({
    id: 0,
    title: '',
    levelId: '',
    categoryId: '',
    startDate: '',
    endDate: '',
    credit: '',
    hoursPerWeek: '',
    relatedCertification: '',
    description: ''
  });

  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryId] = useState('');
  const [levels, setLevels] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [levelId] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...data,
      [e.target.id]: value
    });
  };

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const categoriesResponse = await getCategoriesFromServer();
        setCategories(categoriesResponse.data);
        const levelsResponse = await getLevelsFromServer();
        setLevels(levelsResponse.data);

        setSelectedLevel(response.data.levelId);
        setSelectedCategory(response.data.categoryId)
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };
    fetchCourseData();
  }, []);

  const handleSubmit = async () => {

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
        hidden: 1
      };

      await addCourseToServer(userData);
      navigate('/admin/course');
      alert('Course added successfully');

    } catch (error) {
      console.error('Error:', error);
    };
  };

  return (
    <>
      <div>
        <Link to={"/admin/course"}>
          <button className='button'>Go back →</button>
        </Link>
            
      </div>
      <h1>Create new course</h1>
      <p>Here you can create a course</p>

      <form onSubmit={handleSubmit}>
        {/* <label htmlFor='id'>
          Id
          <input id='id' type='number' value={formData.id} onChange={handleChange} />
        </label> */}
        <label htmlFor='title'>
          Title
          <input id='title' value={data.title} onChange={handleChange} />
        </label>
        <label htmlFor="levelId">
          Level
          <select id="levelId" value={data.levelId} onChange={handleChange}>
            {levels.map((level) => (
              <option key={level.id} value={level.id}>{level.difficulty}</option>
            ))}
          </select>
        </label>
        <label htmlFor="categoryId">
          Category
          <select id="categoryId" value={data.categoryId} onChange={handleChange}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.subject}</option>
            ))}
          </select>
        </label>
        <label htmlFor='start-date'>
          Start date
          <input id='startDate' type='date' value={data.startDate} onChange={handleChange} />
        </label>
        <label htmlFor='end-date'>
          End date
          <input id='endDate' type='date' value={data.endDate} onChange={handleChange} />
        </label>
        <label htmlFor='credit'>
          Credit
          <input id='credit' type='number' value={data.credit} onChange={handleChange} />
        </label>
        <label htmlFor='hours-per-week'>
          Hours per week
          <input id='hoursPerWeek' type='number' value={data.hoursPerWeek} onChange={handleChange} />
        </label>
        <label htmlFor='related-certification'>
          Related certification
          <input id='relatedCertification' value={data.relatedCertification} onChange={handleChange} />
        </label>
        <label htmlFor='description'>
          Description
          <input id='description' value={data.description} onChange={handleChange} />
        </label>
        <button type='submit'>Post</button>
      </form>
    </>
  );
}