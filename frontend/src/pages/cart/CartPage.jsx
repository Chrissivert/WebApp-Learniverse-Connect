import React, { useContext, useState } from 'react';
import { CartContext } from './CartProvider';
import './cartPage.css'; // Import the stylesheet for CartPage
import '../../index.css';
import Button from '../../components/button/Button';
import Coursecard from '../../components/coursecard/Coursecard';
import ConfirmationModal from '../../components/modalBox/ConfirmationModalBox';

function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [purchaseItems, setPurchaseItems] = useState([]);
  const [totalPurchasePrice, setTotalPurchasePrice] = useState(0);

  const handleRemoveItem = (courseId) => {
    removeFromCart(courseId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handlePurchase = () => {
    setPurchaseItems([...cart]);
    const totalPrice = cart.reduce((total, { course }) => total + course.selectedProvider.price, 0);
    setTotalPurchasePrice(totalPrice);
    setShowConfirmation(true);
  };

  const confirmPurchase = () => {
    // Logic for actual purchase action goes here
    console.log("Purchase confirmed!");
    setShowConfirmation(false);
    clearCart();
  };

  const cancelPurchase = () => {
    setShowConfirmation(false);
  };

  const totalPrice = cart.reduce((total, { course }) => total + course.selectedProvider.price, 0);
  const currency = cart.length > 0 ? cart[0].course.selectedProvider.currency : "";

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <Button text="Go to Courses" src="/courses" />
      </div>
      <div className="cart-items">
        {cart.map(({ course }) => (
          <div key={course.id} className="cart-item">
            <Coursecard course={course.course} />
            <p className="provider">Provider: {course.selectedProvider.providerName}</p>
            <p className="price">Price: {course.selectedProvider.currency} {Math.ceil(course.selectedProvider.price)}</p>
            <button className="remove-btn" onClick={() => handleRemoveItem(course.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="price-summary">
          <p>Total Price: {currency} {Math.ceil(totalPrice)}</p>
        </div>
        <div className="action-buttons">
          <button onClick={handleClearCart}>Clear Cart</button>
          <button onClick={handlePurchase}>Purchase</button>
          <Button text="Proceed to Checkout" src="/checkout" />
        </div>
      </div>

      {showConfirmation && (
        <ConfirmationModal
          items={purchaseItems}
          totalPrice={totalPurchasePrice}
          currency={currency}
          onConfirm={confirmPurchase}
          onCancel={cancelPurchase}
        />
      )}
    </div>
  );
}

export default CartPage;
