import React, { useState, useContext } from 'react'; 
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoCoffee from '../assets/logoCoffee.png';
import cart from '../assets/cart.png';
import { CartContext } from '../../context/Cartcontent'; 

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const { cartCount } = useContext(CartContext); 

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logoCoffee} alt="coffee logo" className="logo" />
        </Link>
        <p className="name">Cloudcoffee</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link>
          {menu === "Home" && <hr className="menu-underline" />}
        </li>
        <li onClick={() => setMenu("About Us")} className={menu === "About Us" ? "active" : ""}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/Aboutus">About Us</Link>
          {menu === "About Us" && <hr className="menu-underline" />}
        </li>
        <li onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/Contactus">Contact Us</Link>
          {menu === "Contact Us" && <hr className="menu-underline" />}
        </li>
      </ul>

      <div className="nav-login">
        <Link to="/login"><button>Login</button></Link>
        <div className="cart-wrapper">
          <Link to="/cart">
            <img src={cart} alt="cart" className="cart" />
            <div className="cart-count">{cartCount}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
