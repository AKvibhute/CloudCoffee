import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import coffeeData from '../components/assets/CoffeeData.js';
import './Product.css';

const Product = () => {
  const categories = [
    'ALL',
    'ESPRESSO',
    'ESPRESSO & COFFEE',
    'ICE TEA',
    'DESSERT COFFEE'
  ];

  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = coffeeData.filter(product => {
    const matchesCategory =
      selectedCategory === 'ALL' || product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="product-page">
      <div className="sidebar">
        <h3>Categories</h3>
        <ul>
          {categories.map((cat, idx) => (
            <li
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? 'active' : ''}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className="product-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>Search</button>
        </div>

        <div className="product-grid">
          {filteredProducts.map(product => (
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to={`/shop/${product.id}`}
              key={product.id}
              className="product-card-link"
            >
              <div className="product-card">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>
                  ₹{product.new_price}{' '}
                  <s className="old-price">₹{product.old_price}</s>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
