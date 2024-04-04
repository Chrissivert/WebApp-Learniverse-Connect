import React, { useState } from 'react';
import axios from 'axios';

export default function PostCourse() {
  const [data, setFormData] = useState({
    id: '',
    title: '',
    levelId: '',
    categoryId: '',
    startDate: '',
    endDate: '',
    credit: '',
    hoursPerWeek: '',
    relatedCertification: '',
    description: '',
    imageType: ''
  });

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
        description: data.description,
        imageType: data.imageType
      };

      axios.post(`http://localhost:8080/courses`, userData)
    } catch (error) {
      console.error('Error:', error);
    };
  };

  return (
    <>
      <h1>POST COURSE HERE:</h1>

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
        <label htmlFor='image-type'>
          Image type
          <input id='imageType' value={data.imageType} onChange={handleChange} />
        </label>
        <button type='submit'>Post</button>
      </form>
    </>
  );
}