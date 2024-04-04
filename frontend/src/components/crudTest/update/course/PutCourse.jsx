import React, { useState } from 'react';
import axios from 'axios';

export default function PutCourse() {
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

      //TODO: Instead of putting "invisible values", GET/fetch already existing data,
      //then present the existing data from the selected ID, and the change whatever 
      //one wants to the presented data, and then PUT the new data into the database!
      axios.put(`http://localhost:8080/courses/${data.id}`, userData)
    } catch (error) {
      console.error('Error:', error);
    };
  };

  return (
    <>
      <h1>PUT COURSE HERE:</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>
          Course id to update
          <input id='id' type='number' value={data.id} onChange={handleChange} />
        </label>
        <label htmlFor='title'>
          New title
          <input id='title' value={data.title} onChange={handleChange} />
        </label>
        <label htmlFor='level'>
          New level id
          <input id='levelId' type='number' value={data.levelId} onChange={handleChange} />
        </label>
        <label htmlFor='category'>
          New category id
          <input id='categoryId' type='number' value={data.categoryId} onChange={handleChange} />
        </label>
        <label htmlFor='start-date'>
          New start date
          <input id='startDate' type='date' value={data.startDate} onChange={handleChange} />
        </label>
        <label htmlFor='end-date'>
          New end date
          <input id='endDate' type='date' value={data.endDate} onChange={handleChange} />
        </label>
        <label htmlFor='credit'>
          New credit
          <input id='credit' type='number' value={data.credit} onChange={handleChange} />
        </label>
        <label htmlFor='hours-per-week'>
          New hours per week
          <input id='hoursPerWeek' type='number' value={data.hoursPerWeek} onChange={handleChange} />
        </label>
        <label htmlFor='related-certification'>
          New related certification
          <input id='relatedCertification' value={data.relatedCertification} onChange={handleChange} />
        </label>
        <label htmlFor='description'>
          New description
          <input id='description' value={data.description} onChange={handleChange} />
        </label>
        <label htmlFor='image-type'>
          New image type
          <input id='imageType' value={data.imageType} onChange={handleChange} />
        </label>
        <button type='submit'>Update</button>
      </form>
    </>
  );
}