import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ProductsContext from "../../context/products/Context";
import Header from "../../components/header/Header";
import Aside from "../../components/aside/Aside";
import "./products.css";

const ProductsPage = () => {
  const productContext = useContext(ProductsContext);
  console.log("THE NEW CONTEXT ", productContext);
  return (
    <React.Fragment>
      <Header />
      <Aside />
      <input type="text" placeholder="Search products" />
      <main>
        {productContext.products.map((product) => (
          <div className="card" key={product.id}>
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
                onClick={productContext.addProductToCart.bind(this, {
                  ...product,
                  isSavedForLater: true,
                })}
              >
                <i className="fas fa-heart"></i>
              </a>
              &nbsp;
              <a
                className="cartButton"
                href="javascript:void(0)"
                onClick={productContext.addProductToCart.bind(this, {
                  ...product,
                  isSavedForLater: false,
                })}
              >
                <i className="fas fa-cart-plus"></i>
              </a>
            </p>
          </div>
        ))}
      </main>
    </React.Fragment>
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
