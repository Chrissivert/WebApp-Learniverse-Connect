import React, { useContext, useState } from 'react';
import { CartContext } from './CartProvider';
import './cartPage.css'; 
import '../../index.css';
import Button from '../../components/button/Button';
import Coursecard from '../../components/coursecard/Coursecard';
import ConfirmationModal from '../../components/modalBox/ConfirmationModalBox';
import { useNavigate } from 'react-router-dom';
import useEmailLogic from '../../components/EmailLogic';
import Spinner from '../../components/spinner/Spinner';

function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationType, setConfirmationType] = useState(null);
  const [purchaseItems, setPurchaseItems] = useState([]);
  const [totalPurchasePrice, setTotalPurchasePrice] = useState(0);
  const [loading, setLoading] = useState(false); // State for loading spinner
  const navigate = useNavigate();
  const { sendPurchaseEmail } = useEmailLogic();

  const handleRemoveItem = (courseId) => {
    removeFromCart(courseId);
  };

  const handleClearCart = () => {
    setConfirmationType("clearCart");
    setShowConfirmation(true);
  };

  const handlePurchase = () => {
    setPurchaseItems([...cart]);
    const totalPrice = cart.reduce((total, { course }) => total + course.selectedProvider.price, 0);
    setTotalPurchasePrice(totalPrice);
    setConfirmationType("purchase");
    setShowConfirmation(true);
  };

  const confirmPurchase = async () => {
    setLoading(true); // Show spinner
    try {
      await sendPurchaseEmail(cart); // Send email after confirmation
      clearCart();
      navigate('/purchased', { state: { emailConfirmationSent: true } }); // Redirect to purchase page with state indicating email confirmation
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    } finally {
      setLoading(false); // Hide spinner regardless of email result
    }
  };
  

  const cancelPurchase = () => {
    setShowConfirmation(false);
  };

  const confirmClearCart = () => {
    clearCart();
    setShowConfirmation(false);
  };

  const cancelClearCart = () => {
    setShowConfirmation(false);
  };

  const totalPrice = cart.reduce((total, { course }) => total + course.selectedProvider.price, 0);
  const currency = cart.length > 0 ? cart[0].course.selectedProvider.currency : "";

  return (
    <div className="cart-page">
      {loading && <Spinner />}
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
          <button onClick={handleClearCart} disabled={cart.length === 0} className={cart.length === 0 ? "disabled" : ""}>Clear Cart</button>
          <button onClick={handlePurchase} disabled={cart.length === 0} className={cart.length === 0 ? "disabled" : ""}>Purchase</button>
        </div>
      </div>

      {showConfirmation && confirmationType === "clearCart" && (
        <ConfirmationModal
          message="Are you sure you want to clear your cart?"
          onConfirm={confirmClearCart}
          onCancel={cancelClearCart}
        />
      )}

      {showConfirmation && confirmationType === "purchase" && (
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
