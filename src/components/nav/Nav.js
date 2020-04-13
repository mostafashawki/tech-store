import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";

const nav = (props) => (
  <nav>
    <ul>
      <li className="brand">
        <NavLink to="/">TECH STORE</NavLink>
      </li>

      <li>
        <NavLink to="/">
          <i className="fas fa-store fa-2x" title="Products"></i>
        </NavLink>
      </li>
      <li id="cartNav">
        <NavLink to="/cart">
          <i className="fas fa-shopping-cart fa-2x" title="Cart"></i>
          {props.cartCounter}
        </NavLink>
      </li>
      <li id="whishListNav">
        <NavLink to="/wishlist">
          <i className="fas fa-heart fa-2x" title="Whishlist"></i>
          {props.wishlistCounter}
        </NavLink>
      </li>
      <li>
        <NavLink to="/user">
          <i className="fas fa-user fa-2x" title="Profile"></i>
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default nav;
