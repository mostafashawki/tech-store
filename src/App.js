import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductsProvider from "./context/products/Provider";
import UserProvider from "./context/user/Provider";
import ProductsPage from "./pages/products/Products";
import CartPage from "./pages/cart/Cart";
import WhishlistPage from "./pages/wishlist/Wishlist";
import DetailsPage from "./pages/productDetails/Details";
import UserPage from "./pages/user/User";
import Notifications from "react-notify-toast";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <BrowserRouter>
          <div id="content">
            {/* <main>Main</main> */}
            {/* <main> */}
            <Switch>
              <Route path="/" component={ProductsPage} exact />
              <Route path="/cart" component={CartPage} exact />
              <Route path="/wishlist" component={WhishlistPage} exact />
              <Route path="/details/:id" component={DetailsPage} exact />
              <Route path="/user" component={UserPage} exact />
            </Switch>
            {/* </main> */}
            <footer>
              <span>TECH STORE</span> © 2020
            </footer>
            <Notifications />
          </div>
        </BrowserRouter>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
