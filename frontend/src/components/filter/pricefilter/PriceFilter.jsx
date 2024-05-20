import React, { useState, useEffect } from 'react';

export default function PriceRangeFilter({ onPriceChange, maxPrice }) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(Math.ceil(maxPrice / 100) * 100);

  useEffect(() => {
    onPriceChange(minValue, maxValue);
  }, [minValue, maxValue]);

  useEffect(() => {
    // Update maxValue when maxPrice changes
    setMaxValue(Math.ceil(maxPrice / 100) * 100);
  }, [maxPrice]);

  return (
    <div className="price-range-container">
      <div className='min-price-range'>
        <label>Min Price: {minValue}</label>
        <input
          type="range"
          min={0}
          max={maxValue}
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
          min={minValue}
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
