// CurrencySelector.jsx
import React from 'react';
import { useCurrencyContext } from './TargetCurrencyContext.jsx';

function CurrencySelector({ currencies }) {
  const { targetCurrency, handleCurrencyChange } = useCurrencyContext();

  return (
    <div>
      <label>Select Currency:</label>
      <select value={targetCurrency} onChange={(e) => handleCurrencyChange(e.target.value)}>
        {currencies.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySelector;
