import React, { useState, useEffect } from 'react';
import Slider from 'react-slider';
import './priceFilter.css';

export default function PriceRangeFilter({ onPriceChange, maxPrice }) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(Math.ceil(maxPrice / 100) * 100);


  useEffect(() => {
    setMaxValue(Math.ceil(maxPrice / 100) * 100);
  }, [maxPrice]);

  const handleSliderChange = (values) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  return (
    <div className="slider-container">
      <div className="slider-box">
        <h3>Price <span>Range</span></h3>
        <div className="values">{minValue} - {maxValue}</div>
        <small>
          Current Range: {minValue} - {maxValue}
        </small>
        <Slider
          className="slider"
          onChange={handleSliderChange}
          value={[minValue, maxValue]}
          min={0}
          step={100}
          max={Math.ceil(maxPrice / 100) * 100}
        />
      </div>
    </div>
  );
}
