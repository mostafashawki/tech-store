import { notify } from "react-notify-toast";
export const EDIT_USER = "EDIT_USER";

const editUser = (updatedUser, state) => {
  console.log("Old state ", state.user);
  console.log("USER  ", updatedUser);
  // const updatedUser = { ...state.user };
  state.user = { ...updatedUser };
  notify.show("Saved!!", "success");

  console.log("NEW######## state ", state.user);

  return { ...state, user: updatedUser };
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case EDIT_USER:
      return editUser(action.user, state);
    default:
      return state;
  }
};
