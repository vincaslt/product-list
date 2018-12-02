import React from "react";
import PropTypes from "prop-types";
import { fetchProducts } from "../../api/products";
import { ProductCard } from "../ProductCard";
import "./ProductList.css";

export class ProductList extends React.Component {
  state = {
    products: null
  };

  componentDidMount() {
    fetchProducts().then(products => this.setState({ products }));
  }

  render() {
    if (!this.state.products) {
      return "Kraunama...";
    }

    const productCards = this.state.products.map(product => (
      <ProductCard
        key={product.id}
        onClick={() => this.props.onProductClick(product)}
        {...product}
      />
    ));

    return <div className="ProductList_container">{productCards}</div>;
  }
}

ProductList.propTypes = {
  onProductClick: PropTypes.func
};
