import React from "react";
import PropTypes from "prop-types";
import { CartItem } from "../CartItem";

// { id: quantity }
const quantifyProducts = products =>
  products.reduce(
    (quantities, { id }) => ({
      ...quantities,
      [id]: (quantities[id] || 0) + 1
    }),
    {}
  );

export const CartList = ({ products, onRemoveItem }) => {
  const quantities = quantifyProducts(products);
  const cartItems = Object.entries(quantities).map(([id, quantity]) => {
    const product = products.find(product => product.id === id);
    return (
      <CartItem
        {...product}
        quantity={quantity}
        onRemoveClick={() => onRemoveItem(id)}
      />
    );
  });
  const priceTotal = products.reduce((sum, { price }) => sum + price, 0);

  return (
    <div>
      <div>{cartItems}</div>
      <h2>Bendra suma: {priceTotal} eur</h2>
    </div>
  );
};

CartList.propTypes = {
  onRemoveItem: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  )
};
