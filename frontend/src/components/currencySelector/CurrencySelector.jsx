// CurrencySelector.jsx
import React from 'react';
import { useCurrencyContext } from './TargetCurrencyContext.jsx';

function CurrencySelector({ currencies }) {
  const { targetCurrency, handleCurrencyChange } = useCurrencyContext();

  return (
    <div>
      <label htmlFor="currencySelect">Select Preferred Currency:</label>
      <select
        id="currencySelect"
        value={targetCurrency}
        onChange={(e) => handleCurrencyChange(e.target.value)}
        aria-label="Select Currency"
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySelector;
