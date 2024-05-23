import { React, useEffect, useState } from 'react';
import { getImagesFromServer, uploadImageToServer } from '../../services/image-service';
import { updateUserOnServer } from '../../services/user-request';
// import { uploadImageToServer } from '../../../../services/image-service';

export default function UpdateAvatar({ user }) {

  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const chosenImage = e.target.files[0];
    setFile(chosenImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('alt', "Profile image for a user");
    // console.log(images.length);

    const userFormData = new FormData();
    // userFormData.append('id', user.id);
    // userFormData.append("username", user.username);
    // userFormData.append("startDate", user.startDate);
    // userFormData.append("email", user.email);
    // userFormData.append("password", user.password);
    // userFormData.append("role", user.roleId);


    uploadImageToServer(formData);
    try {
    
    const imagesResponse = await getImagesFromServer();
      setImages(imagesResponse.id);

      console.log("ddd" + JSON.stringify(imagesResponse.length));

      console.log("length" + images);

      console.log("lol" + images.length);


      userFormData.append("imgId", images);

      console.log("dadwa" + JSON.stringify(userFormData));


      updateUserOnServer(user.id, userFormData);
    //   updateUserOnServer(user.id,);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Upload File
          <input type="file" name="file" accept=".png, .jpg, .jpeg, .webp, .svg" onChange={handleFileChange}/>
        </label><br/>
        <button type='submit'>Upload</button>
      </form>
    </div>
  )
}