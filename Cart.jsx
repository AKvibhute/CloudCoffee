// src/pages/Cart.jsx
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';
import { CartContext } from '../context/Cartcontent';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // Sync cartItems with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleBuyNow = () => {
    if (!cartItems || cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }
    navigate('/payment', { state: { fromCart: true } });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price || item.new_price) * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div>
        <Link className="back-link" to="/product">← Back to Coffee</Link>
        <h2 className="cart-heading">Shopping Cart</h2>
      </div>
      <div className="cart-main">
        <div className="cart-left">
          <div className="cart-table-header">
            <p>Product Image</p>
            <p>Product Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>

          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-img" />
              <p>{item.name}</p>
              <p>₹{(item.price || item.new_price).toFixed(2)}</p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="qty-input"
              />
              <p>₹{((item.price || item.new_price) * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">X</button>
            </div>
          ))}

          <div className="coupon-row">
            <input type="text" placeholder="Coupon Code" className="coupon-input" />
            <button className="apply-btn">Apply</button>
          </div>
        </div>

        <div className="cart-right">
          <h3>Order Details</h3>
          <div className="order-summary">
            <div className="order-row">
              <p>Subtotal</p>
              <p>₹{subtotal.toFixed(2)}</p>
            </div>
            <div className="order-row total">
              <p>Total</p>
              <p>₹{subtotal.toFixed(2)}</p>
            </div>
            <button className="checkout-btn" onClick={handleBuyNow}>
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
