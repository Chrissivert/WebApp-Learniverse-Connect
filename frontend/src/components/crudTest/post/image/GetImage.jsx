import axios from "axios";
import { useEffect, useState } from "react"
import { generateImageUrl, getImageDataFromServer } from "../../../../services/image-service";

/**
 * 
 *
 * @param {int} imageId 
 * @returns 
 */
export default function GetImage({imageId}) {
  const [altText, setAltText] = useState('');

  /**
   * Gets alt-text from database
   */
  function getAltText() {
    getImageDataFromServer(imageId)
    .then(response => {
      const alt = response.data.alt;
      setAltText(alt);
    }).catch(error => {
      console.error("Error fetching alt data:", error);
    });
  }

  useEffect(() => {
    getAltText();
  }, [imageId]);

  

  return (
    <div className="image">
      <img src={generateImageUrl(imageId)} width={300} alt={altText}/>
    </div>
  )
}