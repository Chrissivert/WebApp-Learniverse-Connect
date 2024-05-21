import React from 'react';

export default function Button({text, src}) {
  
  return (
    <a href={src}>
      <button>
          {text}
      </button>
    </a>
  )
}