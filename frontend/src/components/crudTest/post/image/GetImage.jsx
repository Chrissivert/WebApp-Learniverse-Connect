import axios from "axios";
import { useEffect, useState } from "react"

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
    axios.get(`http://localhost:8080/images/${imageId}`)
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
    <div>
      <img src={`http://localhost:8080/images/${imageId}/data`} width={300} alt={altText}/>
    </div>
  )
}