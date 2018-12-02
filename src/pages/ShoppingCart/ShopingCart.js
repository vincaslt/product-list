import React from "react";
import PropTypes from "prop-types";
import { CartList } from "../../components/CartList";

export const ShopingCart = ({ linkTo, cartItems, removeCartItem }) => (
  <div>
    <a href="/shop" onClick={linkTo("shop")}>
      Grizti i parduotuve
    </a>
    <CartList onRemoveItem={removeCartItem} products={cartItems} />
  </div>
);

ShopingCart.propTypes = {
  linkTo: PropTypes.func.isRequired,
  removeCartItem: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  )
};
