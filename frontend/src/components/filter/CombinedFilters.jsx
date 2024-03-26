import React from 'react';
import PriceRangeFilter from './pricefilter/PriceFilter';
import TableFilter from './sortbyfilter/TableFilter';

function CombinedFilter({ minPrice, maxPrice, onPriceChange, onSortChange, sortOrder, onSortOrderChange }) {
  const handleSortChange = (selectedAttribute) => {
    onSortChange(selectedAttribute);
  };

  return (
    <div>
      <PriceRangeFilter 
        minPrice={minPrice}
        maxPrice={maxPrice}
        onPriceChange={onPriceChange} 
      />
      <TableFilter 
        onSortChange={handleSortChange} 
        sortOrder={sortOrder} 
        onSortOrderChange={onSortOrderChange} // Pass onSortOrderChange to TableFilter
      />
    </div>
  );
}

export default CombinedFilter;
