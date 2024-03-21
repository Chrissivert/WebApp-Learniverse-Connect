import React from 'react';
import './Button.css'

export default function Button({text, src}) {
  
  return (
    <a href={src}>
      <button>
          {text}
      </button>
    </a>
  )
}