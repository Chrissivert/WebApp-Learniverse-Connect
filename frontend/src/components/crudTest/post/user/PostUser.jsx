import React, { useState } from 'react';
import axios from 'axios';

export default function PostUser() {
  const [formData, setFormData] = useState({
    id: '',
    roleId: '',
    username: '',
    startDate: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.id]: value
    });
  };

  const handleSubmit = async () => {

    try {
      const userData = {
        id: formData.id,
        roleId: formData.roleId,
        username: formData.username,
        startDate: formData.startDate,
        email: formData.email,
        password: formData.password
      };

      axios.post("http://localhost:8080/users", userData)
    } catch (error) {
      console.error('Error:', error);
    };
  };

  return (
    <>
      <h1>POST USER HERE:</h1>

      <form onSubmit={handleSubmit}>
        {/* <label htmlFor='id'>
          Id
          <input id='id' type='number' value={formData.id} onChange={handleChange} />
        </label> */}
        <label htmlFor='role'>
          Role id
          <input id='roleId' type='number' value={formData.roleId} onChange={handleChange} />
        </label>

        <label htmlFor='username'>
          Username
          <input id='username' value={formData.username} onChange={handleChange} />
        </label>

        <label htmlFor='start-date'>
          Start data
          <input type='date' id='startDate' value={formData.startDate} onChange={handleChange} />
        </label>

        <label htmlFor='email'>
          Email
          <input type='email' id='email' value={formData.email} onChange={handleChange} />
        </label>

        <label htmlFor='password'>
          Password
          <input type='password' id='password' value={formData.password} onChange={handleChange} />
        </label>
        
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
