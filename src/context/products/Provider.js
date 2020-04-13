import React, { useReducer } from "react";
import ProductsContext from "./Context";
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CREATE_ORDER,
} from "./reducers";
import initialState from "./initialState";

const ProductsProvider = (props) => {
  const products = initialState.products;
  console.log("@#$%^&*(@@@@@@@@@@ ", products);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  const createOrder = (cart) => {
    setTimeout(() => {
      dispatch({ type: CREATE_ORDER, cart: cart });
    }, 700);
  };

  return (
    <ProductsContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        createOrder: createOrder,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
