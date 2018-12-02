import React from "react";
import PropTypes from "prop-types";
import cart from "./cart.png";
import "./Header.css";

export const Header = ({ cartSize }) => (
  <div className="Header_container">
    <h1>Mociutes krautuvele</h1>
    <div className="Header_cartContainer">
      <span>Prekiu krepselyje: {cartSize}</span>
      <img className="Header_cart" src={cart} alt="cart" />
    </div>
  </div>
);

Header.propTypes = {
  cartSize: PropTypes.number
};

Header.defaultProps = {
  cartSize: 0
};