import React, { useContext } from "react";
import ProductsContext from "../../context/products/Context";
import UserForm from "../user/UserForm";
import Header from "../../components/header/Header";
import Aside from "../../components/aside/Aside";
import "./cart.css";

const CartPage = () => {
  const productsContext = useContext(ProductsContext);

  const createOrder = () => {
    productsContext.createOrder(productsContext.cart);
  };

  const isCartHasItem = () => {
    const item = productsContext.cart.find(
      (item) => item.isSavedForLater == false
    );
    if (item) return true;
    else return false;
  };

  return (
    <React.Fragment>
      <Header />
      <Aside />
      <main>
        <div className="cart">
          <h2>Cart:</h2>
          {productsContext.cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {productsContext.cart
              .filter((item) => item.isSavedForLater == false)
              .map((cartItem) => (
                <li className="item" key={cartItem.id}>
                  <div>
                    <strong>{cartItem.title}</strong> - ${cartItem.price} (
                    {cartItem.quantity})
                  </div>
                  <div>
                    <a
                      href="javascript:void(0)"
                      onClick={productsContext.removeProductFromCart.bind(
                        this,
                        cartItem
                      )}
                    >
                      <i class="fas fa-trash-alt"></i>
                    </a>
                  </div>
                </li>
              ))}
          </ul>
          <div className="user">
            <fieldset>
              <legend>
                <i class="fas fa-map-marker-alt"></i> Shipping and Billing
                Address:
              </legend>
              <UserForm />
            </fieldset>
          </div>
          <div className="order">
            <h4>Payment Method:</h4>
            <p>
              <i class="fab fa-cc-visa"></i> 4000 xxxx xxxx 9010
            </p>
            {isCartHasItem() ? (
              <button onClick={createOrder}>Buy Now</button>
            ) : (
              ""
            )}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default CartPage;
