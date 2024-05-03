import React, { useEffect } from 'react';

const TextSizeController = () => {
  useEffect(() => {
    // Set default font size and scale when the component mounts
    document.documentElement.style.setProperty('--base-font-size', '20px');
    document.documentElement.style.setProperty('--dropdown-scale', '1.3');
  }, []);

  const handleFontSizeChange = (event) => {
    const selectedSize = event.target.value;
    let scale = 1.3; // Default scale for medium size
    if (selectedSize === '14px') {
      scale = 1; // Small
    } else if (selectedSize === '26px') {
      scale = 1.6; // Large
    }
    document.documentElement.style.setProperty('--base-font-size', selectedSize);
    document.documentElement.style.setProperty('--dropdown-scale', scale);
  };

  return (
    <div>
      <label htmlFor="fontSize">Select Font Size:</label>
      <select id="fontSize" onChange={handleFontSizeChange} defaultValue="20px">
        <option value="14px">Small</option>
        <option value="20px">Medium</option>
        <option value="26px">Large</option>
      </select>
    </div>
  );
};

export default TextSizeController;
