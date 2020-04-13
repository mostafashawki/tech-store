import Fakerator from "fakerator";

const fakerator = Fakerator();
const user = fakerator.entity.user();

const initialState = {
  user,
};

console.log("the user from Fakerator ", user);
export default initialState;
