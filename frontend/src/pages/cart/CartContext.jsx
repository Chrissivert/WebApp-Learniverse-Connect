// CartProvider.js
import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (course) => {
    setCart([...cart, course]);
  };

  const removeFromCart = (courseId) => {
    setCart(cart.filter(course => course.id !== courseId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
