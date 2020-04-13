import React, { useContext } from "react";
import MainNavigation from "../nav/Nav";
import ProductsContext from "../../context/products/Context";
export default function Header() {
  const productsContext = useContext(ProductsContext);
  return (
    <header>
      <MainNavigation
        cartCounter={productsContext.cart
          .filter((item) => item.isSavedForLater == false)
          .reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
        wishlistCounter={productsContext.cart
          .filter((item) => item.isSavedForLater == true)
          .reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
      />
    </header>
  );
}
