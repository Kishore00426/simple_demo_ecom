import React from "react";
import { Link } from "react-router-dom";
import Images from'../assets/images/ec.png';
import './Header.css'; // Import your CSS file for styling

function Header(){
  return(
  <>
   <header className="header">
      <img src="/ec.png" width="100px" height="100px" />
      <h1 className="logo">E-Commerce Store</h1>
      <input type="text" placeholder="Search products... " className="search-box" />
      <Link to="/cart" className="cart-link">🛒 Cart</Link>
    </header>
  </>
    
    
  );
}



export default Header;