import React, { useState, useEffect } from 'react';

export default function PriceRangeFilter({ onPriceChange, maxPrice }) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(Math.ceil(maxPrice / 100) * 100);

  useEffect(() => {
    onPriceChange(minValue, maxValue);
  }, [minValue, maxValue]);

  useEffect(() => {
    // Ensure min value doesn't exceed max value
    if (minValue > maxValue) {
      setMinValue(maxValue);
    }
  }, [minValue, maxValue]);

  useEffect(() => {
    // Ensure max value doesn't exceed min value
    if (maxValue < minValue) {
      setMaxValue(minValue);
    }
  }, [minValue, maxValue]);

  return (
    <div className="price-range-container">
      <div className='min-price-range'>
        <label>Min Price: {minValue}</label>
        <input
          type="range"
          min={0}
          max={Math.ceil(maxPrice / 100) * 100}
          step={100}
          value={minValue}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            setMinValue(value);
          }}
        />
      </div>
      <div className='max-price-range'>
        <label>Max Price: {maxValue}</label>
        <input
          type="range"
          min={0}
          step={100}
          max={Math.ceil(maxPrice / 100) * 100}
          value={maxValue}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            setMaxValue(value);
          }}
        />
      </div>
    </div>
  );
}
