import React, { useContext } from "react";
import ProductsContext from "../../context/products/Context";
import UserContext from "../../context/user/Context";
import MainNavigation from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import Aside from "../../components/aside/Aside";
import "./details.css";
const DetailsPage = (props) => {
  const productsContext = useContext(ProductsContext);

  const selectedProduct = productsContext.products.find(
    (item) => item.id === props.match.params.id
  );

  return (
    <React.Fragment>
      <Header />
      <Aside />
      <main className="details">
        <h2>Product Details:</h2>
        <div className="imgContainer">
          <img src={selectedProduct.image} />
        </div>
        <ul>
          <li>
            <strong>{selectedProduct.title}</strong>
          </li>
          <li>
            <strong>Description:</strong> {selectedProduct.description}
          </li>
          <li>{selectedProduct.details}</li>
          <li>${selectedProduct.price}</li>
        </ul>
      </main>
    </React.Fragment>
  );
};

export default DetailsPage;
