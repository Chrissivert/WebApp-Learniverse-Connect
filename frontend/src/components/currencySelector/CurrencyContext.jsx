import React, { createContext, useState, useEffect, useContext } from 'react';

const CurrencyContext = createContext();

export const useCurrencyContext = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const initialCurrency = localStorage.getItem('targetCurrency') || 'NOK';
  const [targetCurrency, setTargetCurrency] = useState(initialCurrency);

  const handleCurrencyChange = (currency) => {
    setTargetCurrency(currency);
  };

  useEffect(() => {
    localStorage.setItem('targetCurrency', targetCurrency);
  }, [targetCurrency]);

  return (
    <CurrencyContext.Provider value={{ targetCurrency, handleCurrencyChange }}>
      {children}
    </CurrencyContext.Provider>
  );
};





// import React from 'react';
// import { useCurrencyContext } from './CurrencyContext.jsx';

// function CurrencySelector({ currencies }) {
//   const { targetCurrency, handleCurrencyChange } = useCurrencyContext();

//   return (
//     <div>
//       <label htmlFor="currencySelect">Select Preferred Currency:</label>
//       <select
//         id="currencySelect"
//         value={targetCurrency}
//         onChange={(e) => handleCurrencyChange(e.target.value)}
//         aria-label="Select Preferred Currency"
//         aria-labelledby="currencySelect"
//       >
//         {currencies.map((currency) => (
//           <option key={currency} value={currency}>
//             {currency}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default CurrencySelector;
