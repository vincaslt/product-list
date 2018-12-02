import React from "react";
import PropTypes from "prop-types";
import cart from "./cart.png";
import "./Header.css";

export const Header = ({ cartSize, linkTo }) => (
  <div className="Header_container">
    <h1>Močiutės krautuvėlė</h1>
    <div className="Header_cartContainer">
      <span>
        <span>Prekių </span>
        <a href="/cart" onClick={linkTo("cart")}>
          krepšelyje
        </a>
        <span>: {cartSize}</span>
      </span>
      <img className="Header_cart" src={cart} alt="cart" />
    </div>
  </div>
);

Header.propTypes = {
  linkTo: PropTypes.func.isRequired,
  cartSize: PropTypes.number
};

Header.defaultProps = {
  cartSize: 0
};
