import React, { useReducer } from "react";
import UserContext from "./Context";
import { userReducer, EDIT_USER } from "./reducers";

import initialState from "./initialState";

const UserProvider = (props) => {
  const user = initialState.user;
  console.log("koko ", user);
  const [userState, dispatch] = useReducer(userReducer, {
    user: initialState.user,
  });

  const editUser = (user) => {
    console.log("EDIT USER PROVIDER ***** ", user);
    dispatch({ type: EDIT_USER, user: user });
  };

  return (
    <UserContext.Provider
      value={{
        user: userState.user,
        // user: initialState.user,
        editUser: editUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
