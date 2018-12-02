import * as React from "react";
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
      <ProductCard key={product.id} {...product} />
    ));

    return <div className="ProductList_container">{productCards}</div>;
  }
}
