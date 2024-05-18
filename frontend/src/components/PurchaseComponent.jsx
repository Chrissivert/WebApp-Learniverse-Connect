import React from 'react';
import { sendEmail } from '../services/send-email';

const PurchaseComponent = () => {
  const handlePurchase = async () => {
    const emailData = {
      email: 'chris.sivert@outlook.com',
      items: [
        { name: 'Item 1', price: 100 },
        { name: 'Item 2', price: 200 }
      ]
    };

    console.log('Purchase data:', emailData.email);

    try {
      const response = await sendEmail(emailData.email, "subjdct", "text");
      console.log("response" + response);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };


  return (
    <button onClick={handlePurchase}>Purchase</button>
  );
};

export default PurchaseComponent;
