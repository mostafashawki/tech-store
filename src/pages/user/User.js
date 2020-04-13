import React, { useContext, useState } from "react";
import UserContext from "../../context/user/Context";
import UserForm from "./UserForm";
import Header from "../../components/header/Header";
import Aside from "../../components/aside/Aside";
import { useInputChange } from "../../components/helpers/useInputChange";
import "./user.css";

const UserPage = () => {
  const userContext = useContext(UserContext);
  console.log("CONTEXT ", userContext);

  return (
    <React.Fragment>
      <Header />
      <Aside />
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
          <i class="fas fa-map-marker-alt"></i>Address:
        </h3>
        <UserForm />
      </main>
    </React.Fragment>
  );
};

export default UserPage;
