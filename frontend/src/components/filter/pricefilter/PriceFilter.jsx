import React, { useState, useEffect } from 'react';
import './priceFilter.css'; // Import CSS file

function PriceRangeFilter({ onPriceChange }) {
  const [useInput, setUseInput] = useState(false);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100000);

  const handleMinChange = (e) => {
    let value = parseFloat(e.target.value);
    value = Math.max(-1, Math.min(value, maxValue)); // Restrict within the range
    setMinValue(value);
    onPriceChange(value, maxValue);
  };
  
  const handleMaxChange = (e) => {
    let value = parseFloat(e.target.value);
    value = Math.min(1000, Math.max(value, minValue)); // Restrict within the range
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

  useEffect(() => {
    onPriceChange(minValue, maxValue);
  }, [minValue, maxValue]);

  return (
    <div className="price-range-container"> {/* Apply styling to container */}
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
              min={0}
              max={100000}
              value={minValue}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setMinValue(value);
              }}
            />
          </div>
          <div>
            {/* Scrollbar */}
            <label>Max Price: {maxValue}</label>
            <input
              type="range"
              min={0}
              max={100000}
              value={maxValue}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setMaxValue(value);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PriceRangeFilter;
