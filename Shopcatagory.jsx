import React, { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import all_product from '../components/assets/CoffeeData';
import productReviews from '../components/assets/Productreview';
import './Shopcatagory.css';
import { CartContext } from '../context/Cartcontent';

const Shopcatagory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = all_product.find(p => p.id === parseInt(id));
  const reviews = productReviews[product?.name] || [];

  const handleBuyNow = () => {
    navigate('/payment', { state: { product } });
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.new_price,
      image: product.image,
    });
    navigate('/cart');
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div className="shop-category-container">
      <div className="back-arrow">
        <Link to="/product">← Back</Link>
      </div>

      <div className="content-wrapper">
        <div className="shop-image-container">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="shop-details">
          <h2>{product.name}</h2>
          <p><b>Price:</b> ₹{product.new_price} <s>₹{product.old_price}</s></p>
          <div className="shop-buttons">
            <button onClick={handleAddToCart} className="add-to-cart">Add to Cart</button>
            <button onClick={handleBuyNow} className="buy-now">Buy Now</button>
          </div>
          <p className="shop-description">
            <b>Description:</b> This {product.name} is made with premium ingredients and crafted to perfection for coffee lovers.
          </p>
        </div>
      </div>

      <div className="shop-reviews">
        <h3>Customer Reviews</h3>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <div className="star-line">
                {'★'.repeat(review.star)}{'☆'.repeat(5 - review.star)}
              </div>
              <div className="review-line">{review.review}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shopcatagory;
