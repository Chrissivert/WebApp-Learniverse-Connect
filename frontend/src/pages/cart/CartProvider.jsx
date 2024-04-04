import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Initialize cart state with data from localStorage if available
  const [cart, setCart] = useState(() => {
    try {
      const localData = localStorage.getItem('cart');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Could not load cart data from localStorage:", error);
      return [];
    }
  });

  // Use useEffect to update localStorage whenever the cart state changes
  useEffect(() => {
    try {
      const data = JSON.stringify(cart);
      localStorage.setItem('cart', data);
    } catch (error) {
      console.error("Could not save cart data to localStorage:", error);
    }
  }, [cart]); // Dependency array ensures this runs only when cart changes

  const addToCart = (course) => {
    setCart(currentCart => [...currentCart, course]);
  };

  const removeFromCart = (courseId) => {
    setCart(currentCart => currentCart.filter(course => course.id !== courseId));
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
