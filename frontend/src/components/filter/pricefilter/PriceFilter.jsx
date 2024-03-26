import React, { useState } from 'react';

function PriceRangeFilter({ minPrice, maxPrice, onPriceChange }) {
  const [useInput, setUseInput] = useState(false);
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);


  const handleMinChange = (e) => {
    let value = parseFloat(e.target.value);
    value = Math.max(0, Math.min(value, maxValue)); // Restrict within the range
    setMinValue(value);
    onPriceChange(value, maxValue);
  };
  
  const handleMaxChange = (e) => {
    let value = parseFloat(e.target.value);
    value = Math.min(100000, Math.max(value, minValue)); // Restrict within the range
    setMaxValue(value);
    onPriceChange(minValue, value);
  };
  

  const toggleInputMode = () => {
    setUseInput((prev) => !prev);
    // If toggling to scrollbar mode, apply the filter with the current input values
    if (!useInput && !isNaN(minValue) && !isNaN(maxValue)) {
      onPriceChange(minValue, maxValue);
    }
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={useInput}
            onChange={toggleInputMode}
          />
          Use Input
        </label>
      </div>
      {useInput ? (
        <div>
          <label htmlFor="minPrice">Min Price:</label>
          <input
            type="number"
            id="minPrice"
            value={minValue}
            onChange={handleMinChange}
            placeholder="Min Price"
          />
          <label htmlFor="maxPrice">Max Price:</label>
          <input
            type="number"
            id="maxPrice"
            value={maxValue}
            onChange={handleMaxChange}
            placeholder="Max Price"
          />
        </div>
      ) : (
        <div>
          <div>
            {/* Scrollbar */}
            <label>Min Price: {minValue}</label>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={minValue}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setMinValue(value);
                onPriceChange(value, maxValue);
              }}
            />
          </div>
          <div>
            {/* Scrollbar */}
            <label>Max Price: {maxValue}</label>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={maxValue}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setMaxValue(value);
                onPriceChange(minValue, value);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PriceRangeFilter;
