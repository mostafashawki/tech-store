import React, { useContext, useState } from "react";
import UserContext from "../../context/user/Context";
import ProductsContext from "../../context/products/Context";
import MainNavigation from "../../components/nav/Nav";
import { useInputChange } from "../../components/helpers/useInputChange";
import nestedProp from "nested-property";
import "./user.css";

const UserPage = () => {
  const userContext = useContext(UserContext);
  const productsContext = useContext(ProductsContext);
  console.log("CONTEXT ", userContext);

  const [input, setInput] = useState(userContext.user);
  const handleInputChange = (obj, path, e) => {
    // const newObj = { ...obj };
    const newObj = JSON.parse(JSON.stringify(obj));
    nestedProp.set(newObj, path, e.currentTarget.value);
    // console.log("!!!!!NEW OBJ ", newObj);
    setInput({
      ...input,
      ...newObj,
      // [e.currentTarget.name]: e.currentTarget.value,
    });

    // console.log("INPUTSSSSSS ", input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("%%%%%%%%%%%%%%%%%%%%%%%%the input ################# ", input);
    // console.log("%%%%%%%%%%%%%%%%the CONTEXT ###### ", userContext.user);
    userContext.editUser(input);
  };

  // const [input, handleInputChange] = useInputChange();

  return (
    <React.Fragment>
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
      <aside>
        <p>
          Hi, <strong>{userContext.user.firstName}</strong>
        </p>
      </aside>
      <main className="user">
        <h2>User Profile:</h2>

        <ul>
          <li>
            <span>
              <i class="fas fa-user"></i> {userContext.user.firstName}{" "}
              {userContext.user.lastName}
            </span>
          </li>
          <li>
            <span>
              <i class="fas fa-envelope"></i> {userContext.user.email}
            </span>
          </li>
          <li>
            <span>
              <i class="fas fa-mobile"></i> {userContext.user.phone}
            </span>
          </li>
        </ul>

        <p>
          <i class="fab fa-cc-visa"></i> 4000 xxxx xxxx 9010
        </p>
        <h3>
          <i class="fas fa-map-marker-alt"></i> Edit Address:
        </h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="address.country">Country</label>
          <input
            type="text"
            name="address.country"
            defaultValue={input.address.country}
            onChange={(e) => handleInputChange(input, "address.country", e)}
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="address.city"
            defaultValue={input.address.city}
            onChange={(e) => handleInputChange(input, "address.city", e)}
          />
          <label htmlFor="address.state">State</label>
          <input
            type="text"
            name="address.state"
            defaultValue={input.address.state}
            onChange={(e) => handleInputChange(input, "address.state", e)}
          />
          <label htmlFor="address.street">Street</label>
          <input
            type="text"
            name="address.street"
            defaultValue={input.address.street}
            onChange={(e) => handleInputChange(input, "address.street", e)}
          />
          <label htmlFor="adress.zip">Zip</label>
          <input
            type="text"
            name="adress.zip"
            defaultValue={input.address.zip}
            onChange={(e) => handleInputChange(input, "address.zip", e)}
          />

          <input type="submit" value="Save" />
        </form>
      </main>
    </React.Fragment>
  );
};

export default UserPage;
