import React from "react";
import PropTypes from "prop-types";
import { ProductList } from "../../components/ProductList";

export const Shop = ({ addProductToCart }) => (
  <ProductList onProductClick={addProductToCart} />
);

Shop.propTypes = {
  addProductToCart: PropTypes.func.isRequired
};
