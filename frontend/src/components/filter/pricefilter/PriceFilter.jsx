import React, { useState, useEffect } from 'react';
import './priceFilter.css';

function PriceRangeFilter({ onPriceChange, maxPrice }) {
  const [useInput, setUseInput] = useState(false);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(Math.ceil(maxPrice));

  const handleMinChange = (e) => {
    let value = parseFloat(e.target.value);
    value = Math.max(-1, Math.min(value, maxValue));
    setMinValue(value);
    onPriceChange(value, maxValue);
  };
  
  const handleMaxChange = (e) => {
    let value = parseFloat(e.target.value);
    value = Math.min(Math.ceil(maxPrice), Math.max(value, minValue));
    setMaxValue(value);
    onPriceChange(minValue, value);
  };

  const toggleInputMode = () => {
    setUseInput((prev) => !prev);
    if (!useInput && !isNaN(minValue) && !isNaN(maxValue)) {
      onPriceChange(minValue, maxValue);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      toggleInputMode();
    }
  };

  useEffect(() => {
    onPriceChange(minValue, maxValue);
  }, [minValue, maxValue]);

  useEffect(() => {
    setMaxValue(Math.ceil(maxPrice));
  }, [maxPrice]);

  return (
    <div className="price-range-container">
      <div>
        <label>
          <input
            type="checkbox"
            checked={useInput}
            onChange={toggleInputMode}
            onKeyPress={handleKeyPress}
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
            <label>Min Price: {minValue}</label>
            <input
              type="range"
              min={0}
              max={maxPrice}
              value={minValue}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setMinValue(value);
              }}
            />
          </div>
          <div>
            <label>Max Price: {maxValue}</label>
            <input
              type="range"
              min={0}
              max={maxPrice}
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
