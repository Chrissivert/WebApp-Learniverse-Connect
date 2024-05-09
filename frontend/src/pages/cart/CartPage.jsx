import React, { useContext } from 'react';
import { CartContext } from './CartProvider';
import './cartPage.css'; // Import the stylesheet for CartPage
import '../../index.css';
import Button from '../../components/button/Button';
import Coursecard from '../../components/coursecard/Coursecard';

function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const handleRemoveItem = (courseId) => {
    removeFromCart(courseId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const totalPrice = cart.reduce((total, { course }) => total + course.selectedProvider.price, 0);
  const currency = cart.length > 0 ? cart[0].course.selectedProvider.currency : "";
  // Calculate total price
  
  // Log course objects and cheapestPrice
  console.log("Cart:", cart);
  cart.forEach(({ course }) => {
    console.log("Course ID:", course.id);
    console.log("Course Object:", course);
    console.log("Cheapest Price:", course.selectedProvider.price);
  });

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <Button text="Go to Courses" src="/courses" />
      </div>
      <div className="cart-items">
        {cart.map(({ course }) => ( // Using cart.map here
          <div key={course.id} className="cart-item">
            <Coursecard course={course.course} />
            <p className="provider">Provider: {course.selectedProvider.providerName}</p> {/* Display provider name */}
            <p className="price">Price: {course.selectedProvider.currency} {Math.ceil(course.selectedProvider.price)}</p> {/* Display provider price and currency */}
            <button className="remove-btn" onClick={() => handleRemoveItem(course.id)}>Remove</button>
          </div>
        ))}
        {cart.map(({ course }) => ( // Using cart.map here
          <div key={course.id} className="cart-item">
            <Coursecard course={course.course} />
            <p className="provider">Provider: {course.selectedProvider.providerName}</p> {/* Display provider name */}
            <p className="price">Price: {course.selectedProvider.currency} {course.selectedProvider.price}</p> {/* Display provider price and currency */}
            <button className="remove-btn" onClick={() => handleRemoveItem(course.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="price-summary">
          <p>Total Price: {currency} {Math.ceil(totalPrice)}</p> {/* Display total price */}
        </div>
        <div className="action-buttons">
          <button onClick={handleClearCart}>Clear Cart</button>
          <Button text="Proceed to Checkout" src="/checkout" />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
