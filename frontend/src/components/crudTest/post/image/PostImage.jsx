import React, { useState } from 'react';
import axios from 'axios';

export default function PostImage() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      await axios.post(`http://localhost:8080/images`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFileChange}/>
        <button type='submit'>Upload</button>
      </form>
      <img/>
    </div>
  )
}