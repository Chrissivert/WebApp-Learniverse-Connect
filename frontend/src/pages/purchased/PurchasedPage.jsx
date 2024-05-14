import React from 'react';
import './purchasedPage.css'; // Import the stylesheet for PurchasedPage

function PurchasedPage() {
  return (
    <div className="purchased-page">
      <div className="purchased-content">
        <h1>Purchase Successful!</h1>
        <p>Thank you for your purchase.</p>
        <p>Your order will be processed shortly.</p>
      </div>
    </div>
  );
}

export default PurchasedPage;
