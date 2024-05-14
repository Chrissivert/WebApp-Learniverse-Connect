import React from 'react';
import './confirmationModal.css';

function ConfirmationModal({ items, totalPrice, currency, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirm Purchase</h2>
        <p>Are you sure you want to purchase the following items for {currency} {totalPrice}?</p>
        <ul>
          {items.map(({ course }) => (
            <li key={course.id}>
              {course.title} - {course.selectedProvider.providerName} - {course.selectedProvider.currency} {course.selectedProvider.price}
            </li>
          ))}
        </ul>
        <div className="modal-buttons">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
