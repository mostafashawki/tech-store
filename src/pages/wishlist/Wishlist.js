import React, { useContext } from "react";
import ProductsContext from "../../context/products/Context";
import Header from "../../components/header/Header";
import Aside from "../../components/aside/Aside";
import "./whishlist.css";

const CartPage = () => {
  const productsContext = useContext(ProductsContext);

  return (
    <React.Fragment>
      <Header />
      <Aside />
      <main>
        <div className="cart">
          <h2>Whislist:</h2>
          {productsContext.cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {productsContext.cart
              .filter((item) => item.isSavedForLater == true)
              .map((cartItem) => (
                <li className="item" key={cartItem.id}>
                  <div>
                    <strong>{cartItem.title}</strong> - ${cartItem.price} (
                    {cartItem.quantity})
                  </div>
                  <div>
                    <a
                      href="#"
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
        </div>
      </main>
    </React.Fragment>
  );
};

export default CartPage;
