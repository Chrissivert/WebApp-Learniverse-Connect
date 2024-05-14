import React from 'react';
import './confirmationModal.css';

function ConfirmationModal({ message, items, totalPrice, currency, onConfirm, onCancel }) {

  console.log(items); // Log the items to console

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirmation</h2>
        <p>{message}</p>
        {items && (
          <div>
            <p className="total-items"> Items:</p>
            <ul>
              {items.map(({ course }) => (
                <li key={course.id}>
                  {course.course.title} - {course.selectedProvider.providerName} - {course.selectedProvider.currency} {Math.ceil(course.selectedProvider.price)}
                </li>
              ))}
            </ul>
            <p className="total-price">Total Price: {currency} {Math.ceil(totalPrice)}</p>
          </div>
        )}
        <div className="modal-buttons">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
