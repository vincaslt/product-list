import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Header } from "./components/Header";
import { Shop } from "./pages/Shop";
import { ShopingCart } from "./pages/ShoppingCart";

class App extends React.Component {
  state = {
    page: "shop",
    cart: []
  };

  addProductToCart = product =>
    this.setState({ cart: [...this.state.cart, product] });

  removeProductFromCart = id =>
    this.setState({
      cart: this.state.cart.filter(product => product.id !== id)
    });

  linkTo = page => e => {
    e.preventDefault();
    this.setState({ page });
  };

  renderPage = page => {
    switch (page) {
      case "shop":
        return <Shop addProductToCart={this.addProductToCart} />;
      case "cart":
        return (
          <ShopingCart
            removeCartItem={this.removeProductFromCart}
            cartItems={this.state.cart}
            linkTo={this.linkTo}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="App">
        <Header cartSize={this.state.cart.length} linkTo={this.linkTo} />
        {this.renderPage(this.state.page)}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
