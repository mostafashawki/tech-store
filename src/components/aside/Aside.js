import React, { useContext } from "react";
import UserContext from "../../context/user/Context";
import { NavLink } from "react-router-dom";
export default function Aside() {
  const userContext = useContext(UserContext);
  return (
    <aside>
      <p>
        Hi,{" "}
        <strong>
          <NavLink className="button" to="/user">
            {userContext.user.firstName}
          </NavLink>
        </strong>
      </p>
      <input type="text" placeholder="Search products" />
    </aside>
  );
}
