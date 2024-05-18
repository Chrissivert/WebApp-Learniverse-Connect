import React from 'react';
import { sendEmail } from '../services/send-email';

const PurchaseComponent = ({ cart, onPurchase }) => {
  console.log("dada"+ JSON.stringify(cart));
  const handlePurchase = async () => {
    const emailData = {
      email: 'marikristinehegge@hotmail.com',
      items: cart.map(({ course }) => {
        console.log('Course:', course); // Add console log here
        return { name: course.course.title, 
          price: course.selectedProvider.price, 
          currency: course.selectedProvider.currency,
          provider: course.selectedProvider.providerName }
      }),
    };

    console

    try {
      const response = await sendEmail(emailData.email, "Purchase Confirmation", emailData.items);
      console.log("response", response);
      alert('Email sent successfully!');
      onPurchase();
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
