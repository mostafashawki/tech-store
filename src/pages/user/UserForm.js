import React, { useContext, useState } from "react";
import UserContext from "../../context/user/Context";
import nestedProp from "nested-property";
import "./user.css";

const UserForm = () => {
  const userContext = useContext(UserContext);
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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="address.country">Country</label>
      <input
        type="text"
        name="address.country"
        defaultValue={input.address.country}
        onChange={(e) => handleInputChange(input, "address.country", e)}
        required
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        name="address.city"
        defaultValue={input.address.city}
        onChange={(e) => handleInputChange(input, "address.city", e)}
        required
      />
      <label htmlFor="address.state">State</label>
      <input
        type="text"
        name="address.state"
        defaultValue={input.address.state}
        onChange={(e) => handleInputChange(input, "address.state", e)}
        required
      />
      <label htmlFor="address.street">Street</label>
      <input
        type="text"
        name="address.street"
        defaultValue={input.address.street}
        onChange={(e) => handleInputChange(input, "address.street", e)}
        required
      />
      <label htmlFor="adress.zip">Zip</label>
      <input
        type="text"
        name="adress.zip"
        defaultValue={input.address.zip}
        onChange={(e) => handleInputChange(input, "address.zip", e)}
        required
      />

      <input type="submit" value="Edit Address" />
    </form>
  );
};

export default UserForm;
