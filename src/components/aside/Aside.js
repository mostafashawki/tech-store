import React, { useContext } from "react";
import UserContext from "../../context/user/Context";
import { NavLink, useLocation } from "react-router-dom";
export default function Aside() {
  const location = useLocation();
  const userContext = useContext(UserContext);
  console.log("THE PATHIS ", location.pathname);
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
      {location.pathname == "/" ? (
        <input type="text" placeholder="Search products" />
      ) : null}
    </aside>
  );
}
