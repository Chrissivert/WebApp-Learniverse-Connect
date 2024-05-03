import axios from "axios";
import { useEffect, useState } from "react"

export default function GetImage({imageId}) {
  const [imageUrl, setImageUrl] = useState('');
  const [imageContentType, setImageContentType] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/images/${imageId}/data`, {
      responseType: 'arraybuffer'
    }).then(response => {
      const contentType = response.headers['content-type'];
      const blob = new Blob([response.data], {type: contentType});
      setImageUrl(URL.createObjectURL(blob));
      setImageContentType(contentType);
    }).catch(error => {
      console.error("error fetching image data:", error);
    });
  }, [imageId]);

  return (
    <div>
      {/* {imageUrl && <img src={imageUrl} alt="Image"/>} */}
      <img src={imageUrl} width={300}/>
      {imageContentType && <p>Content Type: {imageContentType}</p>}
    </div>
  )
}