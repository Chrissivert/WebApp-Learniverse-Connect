import React, { useState } from 'react';
import axios from 'axios';
import "./PostCourse.css";
import { useNavigate, Link } from "react-router-dom";
import { addCourseToServer } from '../../../../services/course-service';

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

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...data,
      [e.target.id]: value
    });
  };

  const handleSubmit = async () => {

    try {
      const userData = {
        id: data.id,
        title: data.title,
        levelId: data.levelId,
        categoryId: data.categoryId,
        startDate: data.startDate,
        endDate: data.endDate,
        credit: data.credit,
        hoursPerWeek: data.hoursPerWeek,
        relatedCertification: data.relatedCertification,
        description: data.description
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
          <button className='button'>← Go back</button>
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
        <label htmlFor='level'>
          Level id
          <input id='levelId' type='number' value={data.levelId} onChange={handleChange} />
        </label>
        <label htmlFor='category'>
          Category id
          <input id='categoryId' type='number' value={data.categoryId} onChange={handleChange} />
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