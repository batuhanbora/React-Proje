export const showHideCart = () => ({
  type: "SHOW_HIDE_CART",
});

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product
});

export const removeFromCart = (productId) => {
  return {
      type: "REMOVE_FROM_CART",
      payload: productId
  };
};

export const clearCart = () => {
  return {
      type: "CLEAR_CART"
  };
};

