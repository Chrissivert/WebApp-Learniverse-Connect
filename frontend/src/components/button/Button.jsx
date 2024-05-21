import React from 'react';

export default function Button({ text, src, img, alt, imageName, linkName, className }) {

  return (
    <div className={className}>
      <a href={src} className={linkName}>      
        <img src={img} alt={alt} className={imageName}/> {text}
      </a>
    </div>
  )
}