import React, { useState } from "react";
import { Switch, Route } from "react-router";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";

import "./styles.css";
import CartContext from "./contexts/CartContext";

export default function App() {
  const [cart, setCart] = useState({});
  const increaseQuantity = (product) => {
    let newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.tile,
        price: product.price,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  };
  const decreaseQuantity = (product) => {
    let newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id].quantity -= 1;
      if (newCart[product.id].quantity <= 0) {
        delete newCart[product.id];
      }
    }
    setCart(newCart);
  };
  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
      {/* <Switch>
        <Route exact={true} path="/cart" component={CartPage} />
        <Route exact={true} path="/" component={ProductsPage} />
        <Route component={NotFoundPage} />
      </Switch> */}
      <NotFoundPage />
    </CartContext.Provider>
  );
}
