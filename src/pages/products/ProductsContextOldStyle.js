import React from "react";
import { NavLink } from "react-router-dom";
import ShopContext from "../../context/shop-context";
import MainNavigation from "../../components/nav/Nav";
import "./products.css";

const ProductsPage = (props) => {
  return (
    <ShopContext.Consumer>
      {(context) => (
        <React.Fragment>
          <header>
            <MainNavigation
              cartCounter={context.cart
                .filter((item) => item.isSavedForLater == false)
                .reduce((count, curItem) => {
                  return count + curItem.quantity;
                }, 0)}
              wishlistCounter={context.cart
                .filter((item) => item.isSavedForLater == true)
                .reduce((count, curItem) => {
                  return count + curItem.quantity;
                }, 0)}
            />
          </header>
          <aside>
            <p>
              Hi, <strong>{context.user.firstName}</strong>
            </p>
            <input type="text" placeholder="Search products" />
          </aside>
          <main>
            {context.products.map((product) => (
              <div className="card">
                <img src={product.image} />
                <h3>
                  <NavLink className="button" to={"/details/" + product.id}>
                    {product.title}
                  </NavLink>
                </h3>
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>
                <p>
                  <a
                    className="button"
                    href="javascript:void(0)"
                    onClick={context.addProductToCart.bind(this, {
                      ...product,
                      isSavedForLater: true,
                    })}
                  >
                    <i class="fab fa-gratipay"></i>
                  </a>
                  &nbsp;
                  <a
                    className="cartButton"
                    href="javascript:void(0)"
                    onClick={context.addProductToCart.bind(this, {
                      ...product,
                      isSavedForLater: false,
                    })}
                  >
                    <i className="fas fa-cart-plus"></i>
                  </a>
                </p>
              </div>

              // <li key={product.id}>
              //   <div>
              //     <strong>{product.title}</strong> - ${product.price}
              //   </div>
              //   <div>
              //     <button
              //       onClick={context.addProductToCart.bind(this, product)}
              //     >
              //       Add to Cart
              //     </button>
              //   </div>
              // </li>
            ))}
          </main>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

// const mapStateToProps = state => {
//   return {
//     products: state.products,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addProductToCart: product => dispatch(addProductToCart(product))
//   };
// };

export default ProductsPage;
