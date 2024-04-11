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

  // Calculate total price
  const totalPrice = cart.reduce((total, course) => total + course.cheapestPrice, 0);

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <Button text="Go to Courses" src="/courses" />
      </div>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((course) => {
            console.log(course); // Print the course object in the console
            return (
              <div key={course.id} className="cart-item">
                <Coursecard course={course} />
                <p>Price: ${course.cheapestPrice}</p> {/* Display price of each course */}
                <button onClick={() => handleRemoveItem(course.id)}>Remove</button>
              </div>
            );
          })
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-summary">
        <div className="price-summary">
          <p>Total Price: ${totalPrice}</p> {/* Display total price */}
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
