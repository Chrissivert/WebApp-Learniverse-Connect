import React, { useState } from 'react';
import axios from 'axios';

export default function PostImage() {
  const [file, setFile] = useState(null);
  const [altText, setAltText] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleAltTextChange = (e) => {
    setAltText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !altText) {
      console.error("Please select a file and enter an image description.")
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('alt', altText)

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
        <label>
          Upload File
          <input type="file" name="file" onChange={handleFileChange}/>
        </label><br/>
        <label>
          Image Description
          <input value={altText} onChange={handleAltTextChange}/>
        </label><br/>
        <img src={image} width={300}/>
        <button type='submit'>Upload</button>
      </form>
    </div>
  )
}