import React, { useState } from 'react';
import axios from 'axios';

export default function DeleteCourse() {

  const [data, setData] = useState({
    id: ''
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.id]: value
    });
  };

  const handleSubmit = async () => {
    try {

      axios.delete(`http://localhost:8080/courses/${data.id}`)
    } catch (error) {
      console.error('Error:', error);
    };
  };

  return (
    <>
      <h1>DELETE COURSE HERE:</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>
          Id
          <input id='id' type='number' value={data.id} onChange={handleChange} />
        </label>
        <button type='submit'>Delete</button>
      </form>
    </>
  );
}