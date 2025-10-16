import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Order.css';
import coffeeData from '../components/assets/CoffeeData'; // Update path if needed

const Order = () => {
  const navigate = useNavigate();
  const orders = JSON.parse(localStorage.getItem('boughtItems')) || [];

  const handleBuyAgain = (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const newItem = {
      ...item,
      quantity: item.quantity || 1,
    };

    const updatedCart = [...cartItems, newItem];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  return (
    <div className="order-container">
      <h2 className="order-heading">Your Past Orders</h2>
      {orders.length === 0 ? (
        <p>No past orders yet.</p>
      ) : (
        <div className="order-list">
          {[...orders]
            .reverse() // ✅ recent first
            .map((order, index) => {
              // 🔍 Match item from coffeeData by ID or name
              const coffee = coffeeData.find(
                (item) => item.id === order.id || item.name === order.name
              );

              return (
                <div className="order-card" key={index}>
                  <img
                    src={order.image || coffee?.image}
                    alt={order.name}
                    className="order-img"
                  />
                  <div className="order-info">
                    <h3>{order.name}</h3>

                    {/* ✅ Price with red strike-through for old price */}
                    <p>
                      ₹{(coffee?.new_price || order.new_price)?.toFixed(1) || '0.00'}
                      {coffee?.old_price || order.old_price ? (
                        <span className="old-price">
                          <s>₹{(coffee?.old_price || order.old_price)?.toFixed(1)}</s>
                        </span>
                      ) : null}
                    </p>

                    <p>Quantity: {order.quantity || 1}</p>

                    {/* ✅ Purchased Date (formatted) */}
                    <p>
                      Purchased on:{' '}
                      {order.date
                        ? new Date(order.date).toLocaleString('en-IN', {
                            dateStyle: 'medium',
                            timeStyle: 'short',
                          })
                        : new Date().toLocaleString('en-IN', {
                            dateStyle: 'medium',
                            timeStyle: 'short',
                          })}
                    </p>

                    <button
                      onClick={() => handleBuyAgain(coffee || order)}
                      className="buy-again-btn"
                    >
                      Buy Again
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Order;
