import { notify } from "react-notify-toast";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const CREATE_ORDER = "CREATE_ORDER";

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) =>
      item.id === product.id && item.isSavedForLater === product.isSavedForLater
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  //add animation
  if (product.isSavedForLater) {
    document.getElementById("whishListNav").style.transform = "scaleY(1.5)";
    setTimeout(() => {
      document.getElementById("whishListNav").style.transform = "";
    }, 300);
    notify.show("Added to wishlist!", "success");
  } else {
    document.getElementById("cartNav").style.transform = "scaleY(1.5)";
    setTimeout(() => {
      document.getElementById("cartNav").style.transform = "";
    }, 300);
    notify.show("Added to cart!", "success");
  }

  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (product, state) => {
  console.log("Removing product with id: " + product);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) =>
      item.id === product.id && item.isSavedForLater === product.isSavedForLater
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const createOrder = (cart, state) => {
  const newState = cart.filter((item) => item.isSavedForLater != false);
  notify.show("Thank you for your order!", "success");
  return { ...cart, cart: newState };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case CREATE_ORDER:
      return createOrder(action.cart, state);
    default:
      return state;
  }
};
