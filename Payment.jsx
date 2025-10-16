// src/pages/Payment.jsx
import React, { useEffect, useRef, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';
import { CartContext } from '../context/Cartcontent';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext); // no setCartItems
  const hasPaid = useRef(false);

  const product = location.state?.product;
  const fromCart = location.state?.fromCart;

  useEffect(() => {
    if (hasPaid.current) return;
    hasPaid.current = true;

    let itemsToBuy = [];

    if (fromCart) {
      if (!cartItems || cartItems.length === 0) {
        alert("Cart is empty!");
        navigate('/cart');
        return;
      }
      itemsToBuy = cartItems;
    } else if (product) {
      itemsToBuy = [{ ...product, quantity: 1 }];

      // Remove product from cart if exists
      const updatedCart = cartItems.filter(item => item.id !== product.id);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // only localStorage
    } else {
      alert("No product or cart found.");
      navigate('/product');
      return;
    }

    // Simulate payment
    setTimeout(() => {
      const boughtItems = JSON.parse(localStorage.getItem('boughtItems')) || [];
      const updatedOrders = [
        ...boughtItems,
        ...itemsToBuy.map(item => ({
          ...item,
          date: new Date().toLocaleString(),
        })),
      ];

      localStorage.setItem('boughtItems', JSON.stringify(updatedOrders));

      if (fromCart) {
        localStorage.setItem('cartItems', JSON.stringify([])); // clear cart in localStorage
      }

      alert("Payment Successful!");
      navigate('/orders');
    }, 2500);
  }, [navigate, product, fromCart, cartItems]);

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h2>Processing Payment</h2>
        <p>Transaction in progress. Please do not close this window until purchase.</p>
        <div className="loader"></div>
        <p className="note">Please wait while we confirm your order...</p>
      </div>
    </div>
  );
};

export default PaymentPage;
