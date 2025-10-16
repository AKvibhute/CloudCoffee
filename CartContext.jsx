// src/context/CartContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  });

  const updateQuantity = (id, quantity) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updated);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // ✅ Sync cartItems to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
