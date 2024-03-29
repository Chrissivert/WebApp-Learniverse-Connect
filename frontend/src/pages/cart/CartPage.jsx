import React, { useContext } from 'react';
import { CartContext } from './CartProvider';
import Coursecard from '../../components/coursecard/Coursecard';
import Button from '../../components/button/Button';

function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const handleRemoveItem = (courseId) => {
    removeFromCart(courseId); // Call removeFromCart with the courseId to remove the specific item
  };

  const handleClearCart = () => {
    clearCart(); // Call clearCart to remove all items from the cart
  };

  return (
    <div>
      <Button text='Go to courses' src='/courses'/>
      <h2>Cart</h2>
      <h3>Items in Cart: {cart.length}</h3>
      <div className="cart-items">
        {cart.map(course => (
          <div key={course.id} className="cart-item">
            <Coursecard course={course} />
            <button onClick={() => handleRemoveItem(course.id)}>Remove</button> {/* Button to remove a specific item */}
          </div>
        ))}
      </div>
      <button onClick={handleClearCart}>Clear Cart</button> {/* Button to clear all items from the cart */}
    </div>
  );
}

export default CartPage;
