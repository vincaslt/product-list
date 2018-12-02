import React from "react";
import ReactDOM from "react-dom";
import { ProductList } from "./components/ProductList";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
