import React, { useState, useEffect } from 'react';
import Slider from 'react-slider';
import './priceFilter.css';

export default function PriceRangeFilter({ onPriceChange, maxPrice }) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(Math.ceil(maxPrice / 100) * 100);

  useEffect(() => {
    onPriceChange(minValue, maxValue);
  }, [minValue, maxValue]);

  useEffect(() => {
    setMaxValue(Math.ceil(maxPrice / 100) * 100);
  }, [maxPrice]);

//   return (
//     <section className="price-range-container" aria-labelledby="priceRangeHeading">
//       <div className='min-price-range'>
//         <label htmlFor="minPrice">Min Price: {minValue}</label>
//         <input
//           id="minPrice"
//           type="range"
//           min={0}
//           max={maxValue}
//           step={100}
//           value={minValue}
//           onChange={(e) => {
//             const value = parseFloat(e.target.value);
//             setMinValue(value);
//           }}
//           aria-valuemin={0}
//           aria-valuemax={maxValue}
//           aria-valuenow={minValue}
//         />
//       </div>
//       <div className='max-price-range'>
//         <label htmlFor="maxPrice">Max Price: {maxValue}</label>
//         <input
//           id="maxPrice"
//           type="range"
//           min={minValue}
//           step={100}
//           max={Math.ceil(maxPrice / 100) * 100}
//           value={maxValue}
//           onChange={(e) => {
//             const value = parseFloat(e.target.value);
//             setMaxValue(value);
//           }}
//           aria-valuemin={minValue}
//           aria-valuemax={Math.ceil(maxPrice / 100) * 100}
//           aria-valuenow={maxValue}
//         />
//       </div>
//     </section>
//   );
// }


const MIN = 0;
const MAX = 1000;

const [values, setValues] = useState([MIN, MAX]);

return (
  <div className="slider-container">
    <div className="slider-box">
      <h3>Price <span>Range</span></h3>
      <div className={"values"}>{values[0]} - {values[1]}</div>
      <small>
        Current Range: {values[0]} - {values[1]}
      </small>

      <Slider className={"slider"}
                        onChange={setValues}
                        value={values}
                        min={minValue}
                        step={100}
                        max={maxValue}/>
                        
                  </div>
            </div>
        );
}