import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from '../components/navbar/Footer';
import OfferSlider from '../components/navbar/OfferSlider';


const Home = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-left">
          <h1>
            Brewed bold. Served warm. <br />
            Loved always.
          </h1>
          <div className="hero-buttons">
            <Link to="/orders" className="btn" style={{textDecoration: 'none'}}> Order History</Link>
            <Link to="/product" className="btn" style={{textDecoration: 'none'}}>Menu</Link>

          </div>
        </div>
      </div>
      <OfferSlider />
      <Footer />
    </div>
  );
};

export default Home;
