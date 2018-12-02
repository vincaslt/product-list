import React from "react";
import ReactDOM from "react-dom";
import { ProductList } from "./components/ProductList";
import "./styles.css";
import { Header } from "./components/Header";

class App extends React.Component {
  state = {
    cart: []
  };

  addProductToCart = product =>
    this.setState({ cart: [...this.state.cart, product] });

  render() {
    return (
      <div className="App">
        <Header cartSize={this.state.cart.length} />
        <ProductList onProductClick={this.addProductToCart} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
