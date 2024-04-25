// CurrencyContext.js
import React, { createContext, useState, useContext } from 'react';

const CurrencyContext = createContext();

export const useCurrencyContext = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [targetCurrency, setTargetCurrency] = useState('NOK'); // Default currency

  const handleCurrencyChange = (currency) => {
    setTargetCurrency(currency);
  };

  return (
    <CurrencyContext.Provider value={{ targetCurrency, handleCurrencyChange }}>
      {children}
    </CurrencyContext.Provider>
  );
};
