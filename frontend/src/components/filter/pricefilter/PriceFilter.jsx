import React, { useState, useEffect } from 'react';

export default function PriceRangeFilter({ onPriceChange, maxPrice }) {
  const [value, setValue] = useState(Math.ceil(maxPrice / 100) * 100);

  useEffect(() => {
    onPriceChange(0, value); // Always start from 0 to the current slider value
  }, [value]);

  useEffect(() => {
    setValue(Math.ceil(maxPrice / 100) * 100);
  }, [maxPrice]);

  return (
    <div className="price-range-container">
      <div className='price-range'>
        <label>Price Range: 0 - {value}</label>
        <input
          type="range"
          min={0}
          max={Math.ceil(maxPrice / 100) * 100}
          step={100}
          value={value}
          onChange={(e) => {
            const newValue = parseFloat(e.target.value);
            setValue(newValue);
          }}
        />
      </div>
    </div>
  );
}
