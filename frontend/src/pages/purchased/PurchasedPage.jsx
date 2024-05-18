import React from 'react';
import './purchasedPage.css'; // Import the stylesheet for PurchasedPage
import { useLocation } from 'react-router-dom';

function PurchasedPage() {
  const location = useLocation();
  const emailConfirmationSent = location.state && location.state.emailConfirmationSent;

  return (
    <div className="purchased-page">
      <div className="purchased-content">
        <h1>Purchase Successful!</h1>
        {emailConfirmationSent ? (
          <p>Email confirmation has been sent.</p>
        ) : (
          <p>Thank you for your purchase.</p>
        )}
        <p>Your order will be processed shortly.</p>
      </div>
    </div>
  );
}

export default PurchasedPage;
