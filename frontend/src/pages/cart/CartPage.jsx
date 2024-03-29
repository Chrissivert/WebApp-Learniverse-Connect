import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Coursecard from '../../components/coursecard/Coursecard';
import Button from '../../components/button/Button';

function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <div>
        <Button text='Go to courses' src='/courses'/>
      <h2>Cart</h2>
      <h3>Items in Cart: {cart.length}</h3>
      <div className="cart-items">
        {cart.map(course => (
          <Coursecard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CartPage;
