import axios from "axios";
import { useEffect, useState } from "react"

/**
 * 
 *
 * @param {int} param0 
 * @returns 
 */
export default function GetImage({imageId}) {
  // const [imageUrl, setImageUrl] = useState('');
  // const [imageContentType, setImageContentType] = useState('');
  const [altText, setAltText] = useState('');

  /**
   * Gets images from database.
   */
  // function getImage() {
  //   axios.get(`http://localhost:8080/images/${imageId}/data`, {
  //     responseType: 'arraybuffer'
  //   }).then(response => {
  //     const contentType = response.headers['content-type'];
  //     const blob = new Blob([response.data], {type: contentType});
  //     setImageUrl(URL.createObjectURL(blob));
  //     setImageContentType(contentType);
  //   }).catch(error => {
  //     console.error("Error fetching image data:", error);
  //   });
  // }

  /**
   * Gets alt-text from database
   */
  function getAltText() {
    axios.get(`http://localhost:8080/images/${imageId}`)
    .then(response => {
      const alt = response.data.alt;
      setAltText(alt);
    }).catch(error => {
      console.error("Error fetching alt data:", error);
    });
  }

  useEffect(() => {
    // getImage()
    getAltText();
  }, [imageId]);

  return (
    <div>
      <img src={`http://localhost:8080/images/${imageId}/data`} width={300} alt={altText}/>
      {/* {imageContentType && <p>Content Type: {imageContentType}</p>} */}
    </div>
  )
}