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
    imageType: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await getOneCourseFromServer(id);
        setFormData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course data:', error);
        setLoading(false);
      }
    };
    fetchCourseData();
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...data,
      [e.target.id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          <input id='levelId' type='number' value={data.levelId} onChange={handleChange} />
        </label>
        <label htmlFor='categoryId'>
          Category ID
          <input id='categoryId' type='number' value={data.categoryId} onChange={handleChange} />
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
        <label htmlFor='imageType'>
          Image Type
          <input id='imageType' value={data.imageType} onChange={handleChange} />
        </label>
        <button type='submit'>Update</button>
      </form>
    </>
  );
}