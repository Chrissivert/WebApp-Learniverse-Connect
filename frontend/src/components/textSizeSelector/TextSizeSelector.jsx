import React, { useState } from 'react';

const TextSizeController = () => {
  const [baseFontSize, setBaseFontSize] = useState(16); // Initial base font size in pixels

  const increaseFontSize = () => {
    setBaseFontSize(prevSize => prevSize + 2); // Increase base font size by 2 pixels
    document.documentElement.style.setProperty('--base-font-size', `${baseFontSize + 2}px`);
  };

  const decreaseFontSize = () => {
    setBaseFontSize(prevSize => Math.max(12, prevSize - 2)); // Decrease base font size by 2 pixels, but ensure it doesn't go below 12 pixels
    document.documentElement.style.setProperty('--base-font-size', `${Math.max(12, baseFontSize - 2)}px`);
  };

  return (
    <div>
      <button onClick={increaseFontSize}>Increase Font Size</button>
      <button onClick={decreaseFontSize}>Decrease Font Size</button>
      <p>Sample Text</p>
    </div>
  );
};

export default TextSizeController;
