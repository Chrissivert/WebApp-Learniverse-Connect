import React, { useState } from 'react';
import { useCurrencyContext } from './CurrencyContext.jsx';
import ConfirmationModal from '../popUps/modalBox/ConfirmationModalBox.jsx';
// import ConfirmationModal from './ConfirmationModal.jsx';

// In your CurrencySelector component
const CurrencySelector = ({ currencies }) => {
  const { targetCurrency, handleCurrencyChange } = useCurrencyContext();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const clearCart = () => {
    console.log("inside of clearCart")
    localStorage.removeItem("cart"); // Remove the cart item from localStorage
  };

  const handleCurrencyChangeWithConfirmation = (newCurrency) => {
    if (targetCurrency !== newCurrency) {
      setShowConfirmationModal(true);
    } else {
      handleCurrencyChange(newCurrency);
    }
  };

  const confirmCurrencyChange = () => {
    clearCart(); // Clear the cart
    console.log("inside of confirmCurrencyChange")
    handleCurrencyChange(targetCurrency);
    setShowConfirmationModal(false);
  };

  const cancelCurrencyChange = () => {
    setShowConfirmationModal(false);
  };

  return (
    <div>
      <label htmlFor="currencySelect">Select Preferred Currency:</label>
      <select
        id="currencySelect"
        value={targetCurrency}
        onChange={(e) => handleCurrencyChangeWithConfirmation(e.target.value)}
        aria-label="Select Preferred Currency"
        aria-labelledby="currencySelect"
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      {showConfirmationModal && (
        <ConfirmationModal
          message="Changing currency will remove items from your cart. Are you sure you want to proceed?"
          onConfirm={confirmCurrencyChange}
          onCancel={cancelCurrencyChange}
        />
      )}
    </div>
  );
};

export default CurrencySelector;
