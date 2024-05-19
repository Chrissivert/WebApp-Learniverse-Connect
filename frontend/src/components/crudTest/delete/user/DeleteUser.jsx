import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function DeleteUser() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${id}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      navigate('/admin/user');
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div>
        <Link to={"/admin/user"}>
          <button className='button'>Go back →</button>
        </Link>   
      </div>
      <h1>Delete the user "{user.username}"</h1>

      <form onSubmit={handleSubmit}>
      <p>{user.username}</p>
      <button type='submit'>Delete</button>
      </form>
    </>
  );
}