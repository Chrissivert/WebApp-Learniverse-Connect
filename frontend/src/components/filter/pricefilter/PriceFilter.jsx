import React, { useState } from 'react';

function PriceRangeFilter({ onPriceChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000); // Default max price

  const handleMinPriceChange = (event) => {
    const newMinPrice = parseFloat(event.target.value);
    if (!isNaN(newMinPrice) && newMinPrice >= 0 && newMinPrice <= maxPrice) {
      setMinPrice(newMinPrice);
      onPriceChange(newMinPrice, maxPrice);
    }
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = parseFloat(event.target.value);
    if (!isNaN(newMaxPrice) && newMaxPrice >= minPrice) {
      setMaxPrice(newMaxPrice);
      onPriceChange(minPrice, newMaxPrice);
    }
  };

  return (
    <div>
      <label>
        Min Price: ${minPrice}
        <input
          type="range"
          min="0"
          max={maxPrice}
          value={minPrice}
          onChange={handleMinPriceChange}
        />
      </label>
      <label>
        Max Price: ${maxPrice}
        <input
          type="range"
          min={minPrice}
          max="10000"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </label>
    </div>
  );
}

export default PriceRangeFilter;
