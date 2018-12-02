import React from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

export const ProductCard = ({ image, title, price, onClick }) => (
  <div role="button" onClick={onClick} className="ProductCard_container">
    <div className="ProductCard_imageContainer">
      <img className="ProductCard_image" src={image} alt={title} />
    </div>
    <div className="ProductCard_info">
      <h3>{title}</h3>
      <div>Kaina: {price.toFixed(2)} eur</div>
    </div>
  </div>
);

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

ProductCard.defaultProps = {
  onClick: () => {}
};
