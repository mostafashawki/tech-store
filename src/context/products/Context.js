import React from "react";

export default React.createContext({
  products: [],
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (product) => {},
  createOrder: (cart) => {},
});
