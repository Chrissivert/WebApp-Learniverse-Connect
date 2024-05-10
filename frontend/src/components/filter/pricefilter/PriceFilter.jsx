import React, { useState, useEffect } from 'react';
import './priceFilter.css'; // Import CSS file

function PriceRangeFilter({ onPriceChange, maxPrice }) { // Add maxPrice as a prop
  const [useInput, setUseInput] = useState(false);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(maxPrice); // Use maxPrice as initial value

  console.log("Max Pricaae:", maxPrice); // Log maxPrice
  const handleMinChange = (e) => {
    let value = parseFloat(e.target.value);
    value = Math.max(-1, Math.min(value, maxValue)); // Restrict within the range
    setMinValue(value);
    onPriceChange(value, maxValue);
  };
  
  const handleMaxChange = (e) => {
    let value = parseFloat(e.target.value);
    value = Math.min(maxPrice, Math.max(value, minValue)); // Restrict within the range
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
              max={maxPrice} // Use maxPrice as maximum value
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
              max={maxPrice} // Use maxPrice as maximum value
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
