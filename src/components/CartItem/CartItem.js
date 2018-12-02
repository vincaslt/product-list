import React from "react";
import PropTypes from "prop-types";
import "./CartItem.css";

export const CartItem = ({ image, title, price, quantity, onRemoveClick }) => (
  <div className="CartItem_container">
    <img className="CartItem_image" src={image} alt={title} />
    <div className="CartItem_details">
      <h2 className="CartItem_title">{title}</h2>
      <div className="CartItem_priceInfo">
        <div>
          <div>Vieneto kaina: {price} eur</div>
          <div>Kiekis: {quantity} vnt.</div>
          <button className="CartItem_remove" onClick={onRemoveClick}>
            Pašalinti
          </button>
        </div>
        <div>Viso: {(price * quantity).toFixed(2)} eur</div>
      </div>
    </div>
  </div>
);

CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};
