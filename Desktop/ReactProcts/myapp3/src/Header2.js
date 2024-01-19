// GiftCardAppHeader.js

import React from "react";
import "./Header.css"; // 
import { FcLike } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { TbGiftFilled } from "react-icons/tb";
// import logo from "./image/Coffee_Logo.jpeg";
// import logo from "./image/GiftLogo2.png";

import { MdAccountCircle } from "react-icons/md";
import {Outlet, Link } from "react-router-dom";
const GiftCardAppHeader = () => 




{
  return (
    <div>
      <header className="gift-card-header">
        {/* <img
        src={sampleback}
        alt="backimg"
      /> */}
        {/* <img src={bgimg} alt="" /> */}

        {/* <img src={logo} /> */}

        <div className="logo-container">
          {/* <img className="shop-logo" src={logo} /> */}

          <h1>Gift Card App</h1>
        </div>

        <div className="search-bar-container">
          <input type="text" placeholder="Search..." className="search-bar" />
          <button className="search-button">Search</button>
        </div>

        <div className="user-actions">
          <div className="favorite-icon">
            <FcLike />
          </div>

          <div className="account-icon">
            <FaShoppingCart />
          </div>
          <div className="account-icon">
            <MdAccountCircle />
            
          </div>
        </div>
      </header>
      <div></div>
      <Outlet />
    </div>
  );
};

export default GiftCardAppHeader;